/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert({ type, text }) {
  const errorStyle = css`
    background-color: red;
  `;
  const warningStyle = css`
    background-color: orange;
  `;
  const infoStyle = css`
    background-color: yellow;
  `;
  const successStyle = css`
    background-color: green;
  `;

  const checkAlertType = (type) => {
    if (type === "error") {
      return errorStyle;
    } else if (type === "warning") {
      return warningStyle;
    } else if (type === "info") {
      return infoStyle;
    } else if (type === "success") {
      return successStyle;
    } else {
      return null;
    }
  };

  return <div css={checkAlertType(type)}>This is {text} alert box.</div>;
}

export default Alert;
