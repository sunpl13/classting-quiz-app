import { Global, css } from "@emotion/react";

const reset = css`
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

  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
`;

const GlobalStyle = () => {
  return <Global styles={reset} />;
};

export default GlobalStyle;
