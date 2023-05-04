import { writeFile } from 'node:fs/promises';

const output = `---\n"@fuel-ui/react": patch\n---\n\nincremental\n`;
writeFile('.changeset/fuel-labs-ci.md', output);
