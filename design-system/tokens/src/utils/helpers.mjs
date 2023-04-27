import { spawn } from 'child_process';

export function copyToFigma(name, obj) {
  const proc = spawn('pbcopy');
  proc.stdin.write(JSON.stringify(obj, null, 2));
  proc.stdin.end();
  console.log(`✅ Set: "${name}" copied to clipboard!`);
}

export function createItem(value, type) {
  return { type, value };
}

export function createColor(color) {
  return createItem(color, 'color');
}

export function createDef(
  type,
  obj,
  getValue = (value) => value,
  getKey = (key) => key
) {
  return Object.entries(obj).reduce((obj, [key, value]) => {
    obj[getKey(key)] = {
      value: getValue(value),
      type,
    };
    return obj;
  }, {});
}

export function createFrom(scale) {
  return {
    1: createItem(`{${scale}.1}`, 'color'),
    2: createItem(`{${scale}.2}`, 'color'),
    3: createItem(`{${scale}.3}`, 'color'),
    4: createItem(`{${scale}.4}`, 'color'),
    5: createItem(`{${scale}.5}`, 'color'),
    6: createItem(`{${scale}.6}`, 'color'),
    7: createItem(`{${scale}.7}`, 'color'),
    8: createItem(`{${scale}.8}`, 'color'),
    9: createItem(`{${scale}.9}`, 'color'),
    10: createItem(`{${scale}.10}`, 'color'),
    11: createItem(`{${scale}.11}`, 'color'),
    12: createItem(`{${scale}.12}`, 'color'),
  };
}
