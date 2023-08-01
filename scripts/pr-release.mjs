#!/usr/bin/env node
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
import { getPackages } from '@manypkg/get-packages';
import fetch from 'cross-fetch';
import { $ } from 'execa';
import mm from 'micromatch';
import minimist from 'minimist';
import { createRequire } from 'module';
import { promises as fs } from 'node:fs';
import { dirname } from 'path';
import semver from 'semver';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const requirePkg = createRequire(import.meta.url);
const config = requirePkg(`${__dirname}/../.changeset/config.json`);
const argv = minimist(process.argv.slice(2));

export async function getAllPackages() {
  const { packages } = await getPackages(process.cwd());
  const pkgNames = packages.map((pkg) => pkg.packageJson.name);
  const ignored = config.ignore || [];
  return ignored.length ? mm.not(pkgNames, ignored) : pkgNames;
}

async function deletePackageVersions(filterFn) {
  const packages = await getAllPackages();

  for (const pkg of packages) {
    const response = await fetch(`https://registry.npmjs.org/${pkg}`);
    const { versions } = await response.json();
    const filtered = Object.keys(versions).filter(filterFn);

    // Check if filteredVersions contains any matching versions
    if (filtered.length > 0) {
      console.log(`Versions matching the pattern for package ${pkg}:`);
      // Iterate over the filtered versions
      for (const version of filtered) {
        const fullPackageName = `${pkg}@${version}`;
        // console.log(`Unpublishing ${fullPackageName}`);
        // Check if the package is published
        // console.log(fullPackageName);
        const { stdout: packageVersion } =
          await $`npm view ${fullPackageName} version`;

        if (packageVersion) {
          console.log(`Unpublishing ${fullPackageName}`);
          try {
            const { stdout } =
              await $`npm unpublish ${fullPackageName} --force`;
            console.log(stdout);
          } catch (e) {
            const errMessage = String(e);
            if (
              errMessage?.contains(
                'Cannot publish over previously published version',
              )
            ) {
              await deletePackageVersions(filterFn);
            }
          }
        }
      }
    } else {
      console.log(
        `No versions match the specified pattern for package ${pkg}.`,
      );
    }
  }
}

async function cleanPr(prNumber) {
  const pattern = `-pr-${prNumber}-[a-f0-9]*`;
  await deletePackageVersions(
    (version) => semver.valid(version) && new RegExp(pattern).test(version),
  );
}

async function cleanPrerelease(tag) {
  const pattern = `-${tag}-`;
  await deletePackageVersions((version) => {
    return new RegExp(pattern).test(version) && semver.valid(version);
  });
}

async function postReleaseMsg(version, prNumber) {
  const packages = await getAllPackages();
  let msg = `🚀 Packages release as \`pr-${prNumber}\` tag on NPM:\n`;
  for (const pkg of packages) {
    msg += `- [${pkg}](https://www.npmjs.com/package/${pkg}/v/${version})\n`;
  }
  await fs.writeFile('./release-msg.txt', msg);
}

async function main() {
  if (argv.action === 'clean' && argv.pr) {
    await cleanPr(argv.pr);
  }
  if (argv.action === 'clean' && argv.clean) {
    await cleanPrerelease(argv.clean.replace('clean-tag-', ''));
  }
  if (argv.action === 'msg' && argv.version && argv.pr) {
    await postReleaseMsg(argv.version, argv.pr);
  }
}

main();
