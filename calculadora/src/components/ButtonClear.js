import React from "react";
import Button from "./Button";

const ButtonClear = (props) => (

    <div className="container">
        <div className="btn btn-warning fs-4 w-100 fw-bold" onClick={props.manejarClear}>
            {props.children}
        </div>
    </div>

);

export default ButtonClear;