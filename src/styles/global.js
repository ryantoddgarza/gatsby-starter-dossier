import { css } from 'styled-components';

const global = css`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen-Sans,
      Ubuntu,
      Cantarell,
      "Helvetica Neue",
      sans-serif
    ;
    -webkit-font-smoothing: antialiased;
  }

  code {
    font-family:
      Menlo,
      Consolas,
      Monaco,
      "Liberation Mono",
      "Lucida Console",
      monospace
    ;
  }

  a,
  button,
  label {
    cursor: pointer;
  }

  img {
    user-select: none;
  }
`;

export default global;
