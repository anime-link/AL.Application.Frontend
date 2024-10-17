import React from "react";
import "./styles.css";

export function CamposLogin({ placeholder, type, valor, onChange }) {
    return(
        <div className="login-campos">
            <input 
                className="login-input"
                placeholder={placeholder}
                type={type}
                value={valor}
                onChange={onChange}
            />
        </div>
    );
}