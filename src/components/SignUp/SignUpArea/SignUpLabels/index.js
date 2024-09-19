import React, { useState } from "react";
import "./styles.css";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri";

export function CamposCadastro({ placeholder, type }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const mostrarSenha = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return(
        <div className="cadastro-campos">
            <input 
                className="cadastro-input"
                id="cadastro-label"
                placeholder={placeholder}
                type={isPasswordVisible ? "text" : type}
            />
            {type === "password" && (
                <button 
                    className="cadastro-senha-botao"
                    type="button"
                    onClick={mostrarSenha}
                >
                    {isPasswordVisible ? <RiEyeCloseFill /> : <RiEyeFill />}
                </button>
            )}
        </div>
    );
}