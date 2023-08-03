const fs = require('fs-extra');
const path = require('node:path');
const prettier = require('prettier');
const homedir = require('os').homedir();

function omit(list, props) {
  return Object.entries(props).reduce((obj, [key, value]) => {
    if (list.some((k) => k === key)) return obj;
    return { ...obj, [key]: value };
  }, {});
}

async function main() {
  const storeDir = path.resolve(homedir, '.pnpm-link-store');
  fs.ensureDirSync(storeDir);

  const root = process.cwd();
  const dirs = [
    'common/config',
    'common/test-utils',
    'design-system/react',
    'design-system/css',
  ];

  for (const dir of dirs) {
    const project = path.resolve(root, dir);
    const pkgJSON = await fs.readJSON(path.resolve(project, './package.json'));
    const whitelist = [
      ...(pkgJSON.files || []),
      ...(pkgJSON.publishConfig.files || []),
      'package.json',
    ];

    const files = fs
      .readdirSync(project)
      .filter((f) => whitelist.some((i) => i.includes(f)));
    const dirName = dir
      .replace('common/', '@fuel-ui/')
      .replace('design-system/', '@fuel-ui/');
    const storeProjectPath = path.resolve(storeDir, dirName);
    await fs.remove(storeProjectPath);
    await fs.mkdirp(storeProjectPath);

    await Promise.all(
      files.map(async (file) => {
        await fs.copy(
          path.resolve(project, file),
          path.resolve(storeProjectPath, file),
        );

        const pkgJSONPath = path.resolve(storeProjectPath, 'package.json');
        const pkgJSON = await fs.readJSON(pkgJSONPath);
        const publishConfig = pkgJSON.publishConfig;
        const formatted = prettier.format(
          JSON.stringify({
            ...omit(['publishConfig'], pkgJSON),
            ...publishConfig,
          }),
          { parser: 'json' },
        );
        fs.outputFileSync(pkgJSONPath, formatted, 'utf-8');
      }),
    );
  }
}

main();
