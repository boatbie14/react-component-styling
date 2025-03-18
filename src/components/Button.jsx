/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({ type }) {
  const primaryStyle = css`
    background-color: #074ee8;
  `;

  const secondaryStyle = css`
    background-color: #07a4e8;
  `;

  const styleBtn = css`
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    padding: 16px 32px;
    margin: 8px;
  `;

  return <button css={[type === "primary" ? primaryStyle : secondaryStyle, styleBtn]}>Button</button>;
}

export default Button;
