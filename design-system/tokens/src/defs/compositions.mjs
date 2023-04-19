function layerSize(size) {
  return {
    type: 'composition',
    value: {
      height: `{sizing.${size}}`,
      horizontalPadding: `{spacing.${size}}`,
    },
  };
}

function layerCard() {
  return {
    type: 'composition',
    value: {
      fill: '{card-bg}',
      borderTop: '2px solid {semantic.outlined.primary.border}',
    },
  };
}

function layer(type, name) {
  return {
    [`${name}-${type}`]: {
      type: 'composition',
      value: {
        fill: `{semantic.${type}.${name}.bg}`,
        border: `1px solid {semantic.${type}.${name}.border}`,
        color: `{semantic.${type}.${name}.color}`,
      },
    },
    [`${name}-${type}-hover`]: {
      type: 'composition',
      value: {
        fill: `{semantic.${type}.${name}.hover-bg}`,
        border: `1px solid {semantic.${type}.${name}.hover-border}`,
        color: `{semantic.${type}.${name}.hover-color}`,
      },
    },
  };
}

function _layers(name) {
  return {
    ...layer('solid', name),
    ...layer('ghost', name),
    ...layer('outlined', name),
    ...layer('link', name),
  };
}

export const compositions = {
  'component-wrapper': {
    type: 'composition',
    value: {
      verticalPadding: '{spacing.24}',
      horizontalPadding: '{spacing.24}',
      borderRadius: '{borderRadius.3xl}',
      itemSpacing: '{spacing.16}',
      fill: '{body-bg}',
    },
  },
  layers: {
    card: layerCard(),
    size: {
      xs: layerSize('xs'),
      sm: layerSize('sm'),
      md: layerSize('md'),
      lg: layerSize('lg'),
      xl: layerSize('xl'),
    },
    // base: layers("base"),
    // primary: layers("primary"),
    // secondary: layers("secondary"),
    // info: layers("info"),
    // warning: layers("warning"),
    // success: layers("success"),
    // error: layers("error"),
  },
};
