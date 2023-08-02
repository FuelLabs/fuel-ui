import {
  intentColor as intent,
  createColor,
  isIntentLight,
  getSolidColors,
  getSolidBg,
  getLinkColor,
  getGhostBg,
  getGhostColors,
  getOutlinedColors,
} from '../utils/helpers.mjs';

function inputColor(name) {
  return {
    color: createColor(intent('base', 12)),
    placeholder: createColor(intent('base', 10)),
    border: createColor(intent(name, 6)),
    bg: createColor(`{input-bg}`),
    icon: createColor(intent(name, 8)),
    focus: createColor(intent('base', 2)),
  };
}

const categories = {
  solid(name, isLight) {
    const isBright = isIntentLight(name, isLight);
    const { color, hoverColor } = getSolidColors(name, isLight);
    const bg = getSolidBg(name);

    return {
      bg: createColor(bg.base),
      border: createColor('{transparent}'),
      focus: createColor(bg.focus),
      color: createColor(color),
      icon: createColor(color),
      placeholder: createColor(hoverColor),
      'hover-bg': createColor(bg.hover),
      'hover-border': createColor('{transparent}'),
      'hover-color': createColor(hoverColor),
      'hover-icon': createColor(hoverColor),
      'hover-placeholder': createColor(hoverColor),
      'disabled-bg': createColor(bg.disabled),
      'disabled-border': createColor('{transparent}'),
      'disabled-color': createColor(isBright ? `{blackA.10}` : `{whiteA.10}`),
      'disabled-icon': createColor(isBright ? `{blackA.10}` : `{whiteA.10}`),
    };
  },
  link(name, isLight) {
    const isBright = isIntentLight(name, isLight);
    const { color, hoverColor } = getLinkColor(name, isLight);

    return {
      bg: createColor('{transparent}'),
      border: createColor('{transparent}'),
      focus: createColor(intent(name, 6)),
      color: createColor(color),
      icon: createColor(color),
      placeholder: createColor(hoverColor),
      'hover-bg': createColor('{transparent}'),
      'hover-border': createColor('{transparent}'),
      'hover-color': createColor(hoverColor),
      'hover-icon': createColor(hoverColor),
      'hover-placeholder': createColor(hoverColor),
      'disabled-bg': createColor('{transparent}'),
      'disabled-border': createColor('{transparent}'),
      'disabled-color': createColor(isBright ? `{blackA.10}` : `{whiteA.10}`),
      'disabled-icon': createColor(isBright ? `{blackA.10}` : `{whiteA.10}`),
    };
  },
  ghost(name, isLight) {
    const isBright = isIntentLight(name, isLight);
    const { color, hoverColor } = getGhostColors(name, isLight);
    const bg = getGhostBg(name);

    return {
      bg: createColor(bg.base),
      border: createColor('{transparent}'),
      focus: createColor(bg.focus),
      color: createColor(color),
      icon: createColor(color),
      placeholder: createColor(hoverColor),
      'hover-bg': createColor(bg.hover),
      'hover-border': createColor('{transparent}'),
      'hover-color': createColor(hoverColor),
      'hover-icon': createColor(hoverColor),
      'hover-placeholder': createColor(hoverColor),
      'disabled-bg': createColor(bg.disabled),
      'disabled-border': createColor('{transparent}'),
      'disabled-color': createColor(isBright ? `{blackA.10}` : `{whiteA.10}`),
      'disabled-icon': createColor(isBright ? `{blackA.10}` : `{whiteA.10}`),
    };
  },
  outlined(name, isLight) {
    const isBright = isIntentLight(name, isLight);
    const { color, hoverColor, disabled } = getOutlinedColors(name, isLight);

    return {
      bg: createColor('{transparent}'),
      border: createColor(color),
      focus: createColor(color),
      color: createColor(color),
      icon: createColor(color),
      placeholder: createColor(hoverColor),
      'hover-bg': createColor('{transparent}'),
      'hover-border': createColor(hoverColor),
      'hover-color': createColor(hoverColor),
      'hover-icon': createColor(hoverColor),
      'hover-placeholder': createColor(hoverColor),
      'disabled-bg': createColor('{transparent}'),
      'disabled-border': createColor(disabled),
      'disabled-color': createColor(isBright ? `{blackA.10}` : `{whiteA.10}`),
      'disabled-icon': createColor(isBright ? `{blackA.10}` : `{whiteA.10}`),
    };
  },
};

function semanticCategory(name, isLightTheme) {
  return {
    base: categories[name]('base', isLightTheme),
    primary: categories[name]('primary', isLightTheme),
    secondary: categories[name]('secondary', isLightTheme),
    info: categories[name]('info', isLightTheme),
    warning: categories[name]('warning', isLightTheme),
    success: categories[name]('success', isLightTheme),
    error: categories[name]('error', isLightTheme),
  };
}

export function createSemantics(isLight) {
  return {
    transparent: createColor('transparent'),
    white: createColor('#ffffff'),
    black: createColor('#000000'),
    'body-bg': createColor(isLight ? '{intents.base.1}' : '{black}'),
    'body-inverse': createColor(isLight ? '{black}' : '{}'),
    'card-bg': createColor(isLight ? '{white}' : intent('base', 2)),
    'overlay-bg': createColor(isLight ? intent('base', 5) : '{card-bg}'),
    'overlay-text': createColor(intent('base', isLight ? 12 : 11)),
    'dialog-bg': createColor('{card-bg}'),
    'input-bg': createColor(isLight ? '{white}' : '{blackA.12}'),
    border: createColor('{scales.gray.6}'),
    borderHover: createColor('{scales.gray.8}'),
    brand: createColor(isLight ? intent('primary', 10) : intent('primary', 9)),
    text: {
      color: createColor(intent('base', 11)),
      heading: createColor(intent('base', 12)),
      subtext: createColor(intent('base', 10)),
      muted: createColor(intent('base', 8)),
      icon: createColor(intent('base', 9)),
      inverse: createColor(intent('base', 12)),
      active: createColor(intent('base', 12)),
      link: createColor(isLight ? intent('primary', 8) : intent('primary', 9)),
      'link-active': createColor(
        isLight ? intent('primary', 8) : intent('primary', 9),
      ),
      'link-visited': createColor(
        isLight ? intent('primary', 8) : intent('primary', 9),
      ),
      'link-hover': createColor(intent('primary', 11)),
      'link-disabled': createColor(intent('primary', 7)),
    },
    input: {
      disabled: {
        color: createColor(intent('base', 8)),
        placeholder: createColor(intent('base', 8)),
        border: createColor(intent('base', 4)),
        bg: createColor(intent('base', 1)),
        icon: createColor(intent('base', 6)),
        focus: createColor(intent('base', 2)),
      },
      active: {
        color: createColor(intent('base', 12)),
        placeholder: createColor(intent('base', 10)),
        border: createColor(`{borderHover}`),
        bg: createColor(`{input-bg}`),
        icon: createColor(intent('base', 8)),
        focus: createColor(intent('base', 2)),
      },
      base: inputColor('base'),
      success: inputColor('success'),
      error: inputColor('error'),
    },
    semantic: {
      solid: semanticCategory('solid', isLight),
      ghost: semanticCategory('ghost', isLight),
      outlined: semanticCategory('outlined', isLight),
      link: semanticCategory('link', isLight),
    },
  };
}
