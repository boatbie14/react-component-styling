/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const PrimaryStyle = css`
  background-color: #074EE8;
  padding: 10px 20px;
  color: white;
  padding: 10px 20px;
  border: none;`;
const SecondaryStyle = css`
  background-color: #07A4E8; 
  padding: 10px 20px;
  color: white;
  border: solid 1px yellow;`;

 function Button({type}) {
    return(

<button css={type === "Primary" ? PrimaryStyle : SecondaryStyle}>
Button
</button>
); 
}

export default Button; 



