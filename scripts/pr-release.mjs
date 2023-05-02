#!/usr/bin/env node

/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
import { getPackages } from '@manypkg/get-packages';
import fetch from 'cross-fetch';
import { $ } from 'execa';
import mm from 'micromatch';
import minimist from 'minimist';
import { createRequire } from 'module';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const requirePkg = createRequire(import.meta.url);
const config = requirePkg(`${__dirname}/../.changeset/config.json`);
const argv = minimist(process.argv.slice(2));

async function getAllPackages() {
  const { packages } = await getPackages(process.cwd());
  const pkgNames = packages.map((pkg) => pkg.packageJson.name);
  const ignored = config.ignore || [];
  return mm.not(pkgNames, ignored);
}

async function main() {
  if (!argv.pr) {
    console.log('Please specify a PR number with --pr');
    process.exit(1);
  }

  const prNumber = argv.pr;
  const pattern = `-pr-${prNumber}-[a-f0-9]*`;
  const packages = await getAllPackages();

  for (const pkg of packages) {
    const response = await fetch(`https://registry.npmjs.org/${pkg}`);
    const { versions } = await response.json();
    const filtered = Object.keys(versions).filter((version) =>
      new RegExp(pattern).test(version)
    );

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
          const { stdout } = await $`npm unpublish ${fullPackageName} --force`;
          console.log(stdout);
        }
      }
    } else {
      console.log(
        `No versions match the specified pattern for package ${pkg}.`
      );
    }
  }
}

main();
