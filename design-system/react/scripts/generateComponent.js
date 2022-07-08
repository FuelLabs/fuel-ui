#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const path = require('path');
const fs = require('fs-extra');
const snakeCase = require('lodash/snakeCase');
const prettier = require('prettier');

(async function () {
  const argv = yargs(hideBin(process.argv)).argv;
  const templatesDir = path.resolve(process.cwd(), 'templates/component');
  const componentsDir = path.resolve(process.cwd(), 'src/components');
  const component = argv.name;
  const componentDir = path.join(componentsDir, component);
  const componentClass = snakeCase(component);

  if (fs.pathExistsSync(componentDir)) {
    throw new Error('This component already exist, choose another name!');
  }

  fs.copySync(templatesDir, componentDir);
  const files = fs.readdirSync(componentDir);

  for (const file of files) {
    const newFileName = file.replace('.template', '.tsx').replace('Component', component);

    const filePath = path.join(componentDir, file);
    const newFilePath = path.join(componentDir, newFileName);
    fs.moveSync(filePath, newFilePath);

    const rawFile = fs.readFileSync(newFilePath, 'utf-8');
    const newRawFile = rawFile
      .replaceAll('__COMPONENT__', component)
      .replace('$CLASS$', componentClass);

    fs.outputFile(newFilePath, prettier.format(newRawFile, { parser: 'typescript' }));
  }
})();
