import { Global, css } from '@emotion/react';

const reset = css`
  :root {
    --primary: #150080;
    --accent: #d08642;
    --bg: #ffffff;
    --bg-accent: #e7e8e9;
    --disabled: #9c9c9c;
    --foreground: #2d264b;
    --incorrect: #fb4949;
    --purple-50: #6f3ad0;
    --purple-30: #a86cea;
    --purple-20: rgb(159, 122, 234);
    --green: rgb(0, 200, 150);
  }
  html,
  body,
  #root {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    margin: 0;
    padding-left: 20px;
    margin-block-start: 0px;
    margin-block-end: 0px;
    height: fit-content;
  }

  li {
    margin-block-end: 8px;
  }

  p {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;

    line-height: 160%;
  }

  html,
  * {
    box-sizing: border-box;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    border: none;
  }

  body {
    font-family: monospace;
    background: linear-gradient(
      90deg,
      var(--green) 0%,
      var(--purple-20) 99.85%
    );
    color: var(--foreground);
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 0 30px;
    height: 100vh;
  }

  main {
  }
`;

const GlobalStyle = () => {
  return <Global styles={reset} />;
};

export default GlobalStyle;
