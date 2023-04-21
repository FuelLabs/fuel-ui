import { createColor } from './helpers.mjs';

function inputColor(name) {
  return {
    color: createColor(`{intents.base.11}`),
    placeholder: createColor(`{intents.base.8}`),
    border: createColor(`{intents.${name}.6}`),
    bg: createColor(`{body-bg}`),
    icon: createColor(`{intents.${name}.6}`),
    focus: createColor(`{intents.base.2}`),
  };
}

function isIntentLight(name) {
  return ['primary', 'warning', 'error', 'success'].some((i) => i === name);
}

const categories = {
  solid(name) {
    const isLight = isIntentLight(name);
    return {
      bg: createColor(
        name === 'base' ? '{intents.base.8}' : `{intents.${name}.9}`
      ),
      border: createColor('transparent'),
      focus: createColor(`{intents.${name}.4}`),
      color: createColor(isLight ? `{blackA12}` : `{bodyInverse}`),
      icon: createColor(isLight ? `{blackA10}` : `{bodyInverse}`),
      placeholder: createColor(
        !isLight ? `{intents.${name}.2}` : `{intents.${name}.11}`
      ),
      'hover-bg': createColor(
        name === 'base' ? '{intents.base.9}' : `{intents.${name}.10}`
      ),
      'hover-border': createColor('transparent'),
      'hover-color': createColor(isLight ? `{black}` : `{bodyInverse}`),
      'hover-icon': createColor(isLight ? `{black}` : `{bodyInverse}`),
      'hover-placeholder': createColor(
        !isLight ? `{intents.${name}.3}` : `{intents.${name}.10}`
      ),
      'disabled-color': createColor(`{intents.${name}.11}`),
      'disabled-bg': createColor(`{intents.${name}.5}`),
    };
  },
  ghost(name) {
    return {
      bg: createColor(`{intents.${name}.4}`),
      border: createColor(`{intents.${name}.4}`),
      focus: createColor(`{intents.${name}.4}`),
      color: createColor(`{intents.${name}.12}`),
      icon: createColor(`{intents.${name}.8}`),
      placeholder: createColor(`{intents.${name}.8}`),
      'hover-bg': createColor(`{intents.${name}.5}`),
      'hover-border': createColor(`{intents.${name}.5}`),
      'hover-color': createColor(`{intents.${name}.12}`),
      'hover-icon': createColor(`{intents.${name}.8}`),
      'hover-placeholder': createColor(`{intents.${name}.9}`),
      'disabled-color': createColor(`{intents.${name}.11}`),
      'disabled-bg': createColor(`{intents.${name}.5}`),
    };
  },
  outlined(name) {
    const isLight = isIntentLight(name);
    return {
      bg: createColor(`transparent`),
      border: createColor(`{intents.${name}.8}`),
      focus: createColor(`{intents.${name}.4}`),
      color: createColor(
        isLight ? `{intents.${name}.8}` : `{intents.${name}.11}`
      ),
      icon: createColor(`{intents.${name}.10}`),
      placeholder: createColor(`{intents.${name}.8}`),
      'hover-bg': createColor(`transparent`),
      'hover-border': createColor(`{intents.${name}.8}`),
      'hover-color': createColor(
        isLight ? `{intents.${name}.9}` : `{intents.${name}.12}`
      ),
      'hover-icon': createColor(`{intents.${name}.10}`),
      'hover-placeholder': createColor(`{intents.${name}.9}`),
      'disabled-color': createColor(`{intents.${name}.11}`),
      'disabled-bg': createColor(`{intents.${name}.5}`),
    };
  },
  link(name) {
    const isLight = isIntentLight(name);
    return {
      bg: createColor(`transparent`),
      color: createColor(
        isLight ? `{intents.${name}.11}` : `{intents.${name}.9}`
      ),
      icon: createColor(
        isLight ? `{intents.${name}.11}` : `{intents.${name}.9}`
      ),
      placeholder: createColor(`{intents.${name}.8}`),
      border: createColor(`transparent`),
      focus: createColor('transparent'),
      'hover-bg': createColor(`transparent`),
      'hover-border': createColor(`transparent`),
      'hover-color': createColor(
        isLight ? `{intents.${name}.12}` : `{intents.${name}.10}`
      ),
      'hover-icon': createColor(
        isLight ? `{intents.${name}.12}` : `{intents.${name}.10}`
      ),
      'hover-placeholder': createColor(`{intents.${name}.8}`),
      'disabled-color': createColor(`{intents.${name}.11}`),
      'disabled-bg': createColor(`{intents.${name}.5}`),
    };
  },
};

function semanticCategory(name) {
  return {
    base: categories[name]('base'),
    primary: categories[name]('primary'),
    secondary: categories[name]('secondary'),
    info: categories[name]('info'),
    warning: categories[name]('warning'),
    success: categories[name]('success'),
    error: categories[name]('error'),
  };
}

export function createSemantics(isLight) {
  return {
    white: createColor('#ffffff'),
    black: createColor('#000000'),
    'body-bg': createColor(isLight ? '{scales.gray.1}' : '{black}'),
    'body-inverse': createColor(isLight ? '{black}' : '{scales.gray.1}'),
    'card-bg': createColor('{body-bg}'),
    'overlay-bg': createColor('{scales.gray.1}'),
    border: createColor('{scales.gray.6}'),
    brand: createColor('{intents.primary.9}'),
    text: {
      color: createColor('{intents.base.11}'),
      heading: createColor('{intents.base.12}'),
      subtext: createColor('{intents.base.10}'),
      muted: createColor('{intents.base.8}'),
      icon: createColor('{intents.base.8}'),
      inverse: createColor('{intents.base.12}'),
      active: createColor('{intents.base.12}'),
      link: createColor('{intents.primary.8}'),
      'link-active': createColor('{intents.primary.8}'),
      'link-visited': createColor('{intents.primary.8}'),
      'link-hover': createColor('{intents.primary.11}'),
      'link-disabled': createColor('{intents.primary.7}'),
    },
    input: {
      disabled: {
        color: createColor('{intents.base.6}'),
        placeholder: createColor('{intents.base.6}'),
        border: createColor('{border}'),
        bg: createColor('{body-bg}'),
        icon: createColor('{intents.base.6}'),
      },
      base: inputColor('base'),
      success: inputColor('success'),
      error: inputColor('error'),
    },
    semantic: {
      solid: semanticCategory('solid'),
      ghost: semanticCategory('ghost'),
      outlined: semanticCategory('outlined'),
      link: semanticCategory('link'),
    },
  };
}
