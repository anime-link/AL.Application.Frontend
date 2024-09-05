import React from "react";
import "./styles.css";

export function CamposCadastro({ placeholder, type }) {
    return(
        <div className="cadastro-campos">
            <input 
                className="cadastro-input"
                id="cadastro-label"
                placeholder={placeholder}
                type={type}
            />
        </div>
    );
}