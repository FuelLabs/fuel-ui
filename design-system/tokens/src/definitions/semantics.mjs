import {
  intent as intent,
  createColor,
  isIntentBright,
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

const semanticScales = (name) => {
  const isBright = isIntentBright(name);
  const solid = {
    contrast: isBright ? '{blackA.12}' : '{whiteA.12}',
    surface: intent(name, 9),
    surfaceHover: intent(name, 10),
    subtle: isBright ? '{blackA.10}' : '{whiteA.10}',
    focus: intent(name, 4),
  };
  const ghost = {
    ...solid,
    contrast: intent(name, 12),
    surface: intent(name, 5),
    surfaceHover: intent(name, 6),
    subtle: intent(name, 11),
  };
  const outlined = {
    ...solid,
    surface: intent(name, 11),
    surfaceHover: intent(name, 1),
    contrast: intent(name, 11),
    subtle: intent(name, 8),
  };
  const link = {
    ...outlined,
  };
  return {
    solid,
    ghost,
    link,
    outlined,
  };
};

const semantic = (name, category) => {
  const refs = semanticScales(name);
  const surface = refs[category].surface;
  const surfaceHover = refs[category].surfaceHover;
  const contrast = refs[category].contrast;
  const focus = refs[category].focus;
  const subtle = refs[category].subtle;

  const solid = {
    bg: createColor(surface),
    border: createColor(surface),
    focus: createColor(focus),
    color: createColor(contrast),
    icon: createColor(contrast),
    'hover-bg': createColor(surfaceHover),
    'hover-border': createColor(surfaceHover),
    'hover-color': createColor(contrast),
    'hover-icon': createColor(contrast),
    'disabled-bg': createColor(surface),
    'disabled-border': createColor(surface),
    'disabled-color': createColor(subtle),
    'disabled-icon': createColor(subtle),
  };

  if (category === 'outlined') {
    return {
      ...solid,
      bg: createColor('{transparent}'),
      'hover-bg': createColor('{transparent}'),
      'disabled-bg': createColor('{transparent}'),
      'disabled-border': createColor(subtle),
    };
  }
  if (category === 'link') {
    return {
      ...solid,
      bg: createColor('{transparent}'),
      border: createColor('{transparent}'),
      'hover-bg': createColor('{transparent}'),
      'hover-border': createColor('{transparent}'),
      'disabled-bg': createColor('{transparent}'),
      'disabled-border': createColor('{transparent}'),
    };
  }
  return solid;
};

const categories = {
  solid(name) {
    return semantic(name, 'solid');
  },
  link(name) {
    return semantic(name, 'link');
  },
  ghost(name) {
    return semantic(name, 'ghost');
  },
  outlined(name) {
    return semantic(name, 'outlined');
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
    'body-inverse': createColor(isLight ? '{black}' : '{white}'),
    'card-bg': createColor(isLight ? '{white}' : intent('base', 2)),
    'card-border': createColor(isLight ? '{border}' : '{bodyBg}'),
    'overlay-bg': createColor(isLight ? intent('base', 5) : '{card-bg}'),
    'overlay-text': createColor(intent('base', isLight ? 12 : 11)),
    'dialog-bg': createColor('{card-bg}'),
    'input-bg': createColor(isLight ? '{white}' : '{blackA.12}'),
    border: createColor(isLight ? '{scales.gray.7}' : '{scales.gray.6}'),
    borderHover: createColor('{scales.gray.9}'),
    brand: createColor(isLight ? intent('primary', 10) : intent('primary', 9)),
    text: {
      color: createColor(intent('base', 11)),
      heading: createColor('{body-inverse}'),
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
      solid: semanticCategory('solid'),
      ghost: semanticCategory('ghost'),
      outlined: semanticCategory('outlined'),
      link: semanticCategory('link'),
    },
  };
}
