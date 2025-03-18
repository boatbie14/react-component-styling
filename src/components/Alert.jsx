/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import { TiWarningOutline } from "react-icons/ti";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineCheckCircle } from "react-icons/md";

function Alert({ type, text, children }) {
  const errorStyle = css`
    background-color: #fac8c8;
  `;
  const warningStyle = css`
    background-color: #f9d9c9;
  `;
  const infoStyle = css`
    background-color: #f9ebc8;
  `;
  const successStyle = css`
    background-color: #cef7cd;
  `;

  const alertBox = css`
    width: 100%;
    padding: 16px 24px;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    color: #000;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  `;

  const alertTypes = {
    error: {
      style: errorStyle,
      icon: <RiEmotionUnhappyLine color="#EE595A" />,
    },
    warning: {
      style: warningStyle,
      icon: <TiWarningOutline color="#EA732F" />,
    },
    info: {
      style: infoStyle,
      icon: <IoMdInformationCircleOutline color="#F29A17" />,
    },
    success: {
      style: successStyle,
      icon: <MdOutlineCheckCircle color="#1F9A55" />,
    },
  };

  const selectStyle = alertTypes[type];

  return (
    <div css={[selectStyle.style, alertBox]}>
      {selectStyle.icon} This is {children} alert box.
    </div>
  );
}

export default Alert;
