/* eslint-disable @typescript-eslint/naming-convention */
import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const filepath = path.join(__dirname, '../definitions', 'radix.json');
const file = fs.readFileSync(filepath, 'utf8');

export const radix = JSON.parse(file);
