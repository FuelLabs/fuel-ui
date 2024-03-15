/* eslint-disable @typescript-eslint/no-explicit-any */
import '@testing-library/jest-dom';

import { TextDecoder, TextEncoder } from 'node:util';

global.TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;
global.ArrayBuffer = ArrayBuffer;
global.Uint8Array = Uint8Array;
global.structuredClone = (val: any) => JSON.parse(JSON.stringify(val));
