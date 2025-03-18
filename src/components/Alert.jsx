/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ImSad2 } from "react-icons/im";
import { GoAlertFill } from "react-icons/go";
import { IoAlertCircleOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";


const errorStyle = ["this is an error alert box", css`
    background-color: #f7baba;
    color: black;
    padding: 10px;
    border-radius: 4px`, <ImSad2 className='mt-1' color='red'/>  ]; 
const warningStyle = ["this is a warning alert box", css`
    background-color: #ffe6c4;
    color: black;
    padding: 10px;
    border-radius: 4px`,<GoAlertFill className='mt-1' color='orange'/> ]  ; 
const infoStyle = ["this is an info alert box", css`
    background-color: #fffbe8;
    color: black;
    padding: 10px;
    border-radius: 4px`, <IoAlertCircleOutline className='mt-1' color='#ffcf00' />]  ; 
const successStyle = ["this is a success alert box", css`
    background-color: #e6ffe6;
    color: black;
    padding: 10px;
    border-radius: 4px`, <FiCheckCircle className='mt-1' color='green'/>]  ;  

// const icons = {
//     error: <ImSad2 /> 

// }

function Alert({ type }) {
    return (
<div css={type === "error" ? errorStyle[1] :
    type === "warning" ? warningStyle[1] :
    type === "info" ? infoStyle[1] : 
    type === "success" ? successStyle[1] : null}>
<div style={{display:'flex', flexDirection:'row', gap:'16px', padding:'5px',}}>
    {type === "error" ? <> {errorStyle[2]} {errorStyle[0]} </> :
    type === "warning" ? <>{warningStyle[2]} {warningStyle[0]}</> :
    type === "info" ? <>{infoStyle[2]} {infoStyle[0]}</> : 
    type === "success" ? <>{successStyle[2]} {successStyle[0]} </>: null}
</div>
</div>

    )
}

export default Alert; 

