/* eslint-disable @typescript-eslint/no-explicit-any */

export const normalize: Record<string, any>[] = [
  {
    html: {
      boxSizing: 'content-box',
      lineHeight: 1.15,
    },
    h1: {
      fontSize: '2em',
      marginBlockEnd: '0.67em',
      marginBlockStart: '0.67em',
    },
    'dl, ol, ul) dl, ol, ul': {
      marginBlockEnd: '0',
      marginBlockStart: '0',
    },
    hr: {
      boxSizing: 'content-box',
      color: 'inherit',
      height: '0',
    },
    pre: {
      fontFamily: 'monospace, monospace',
      fontSize: '1em',
    },
    'abbr[title]': {
      textDecoration: 'underline',
      // textDecoration: 'underline dotted',
    },
    'b, strong': {
      fontWeight: 'bolder',
    },
    'code, kbd, samp': {
      fontFamily: 'monospace, monospace',
      fontSize: '1em',
    },
    small: {
      fontSize: '80%',
    },
    table: {
      borderColor: 'currentColor',
      textIndent: '0',
    },
    'button, input, select': {
      margin: '0',
    },
    button: {
      textTransform: 'none',
    },
    'button, input:is([type="button" i], [type="reset" i], [type="submit" i])':
      {
        WebkitAppearance: 'button',
      },
    progress: {
      verticalAlign: 'baseline',
    },
    select: {
      textTransform: 'none',
    },
    textarea: {
      margin: '0',
    },
    'input[type="search" i]': {
      WebkitAppearance: 'textfield',
      outlineOffset: '-2px',
    },
    '::-webkit-inner-spin-button, ::-webkit-outer-spin-button': {
      height: 'auto',
    },
    '::-webkit-input-placeholder': {
      color: 'inherit',
      opacity: 0.54,
    },
    '::-webkit-search-decoration': {
      WebkitAppearance: 'none',
    },
    '::-webkit-file-upload-button': {
      WebkitAppearance: 'button',
      font: 'inherit',
    },
    'button, input:is([type="button" i], [type="color" i], [type="reset" i], [type="submit" i]))::-moz-focus-inner':
      {
        borderStyle: 'none',
        padding: '0',
      },
    'button, input:is([type="button" i], [type="color" i], [type="reset" i], [type="submit" i]))::-moz-focusring':
      {
        outline: '1px dotted $accent11',
      },
    ':-moz-ui-invalid': {
      boxShadow: 'none',
    },
    dialog: {
      backgroundColor: 'white',
      border: 'solid',
      color: 'black',
      // height: '-moz-fit-content',
      height: 'fit-content',
      left: '0',
      margin: 'auto',
      padding: '1em',
      position: 'absolute',
      right: '0',
      // width: '-moz-fit-content',
      width: 'fit-content',
    },
    'dialog:not([open])': {
      display: 'none',
    },
    summary: {
      display: 'list-item',
    },
  },
  {
    'abbr[title]': {
      textDecoration: 'underline dotted',
    },
    dialog: {
      height: '-moz-fit-content',
      width: '-moz-fit-content',
    },
  },
];

export const opinionated: Record<string, any>[] = [{}, ...normalize];
