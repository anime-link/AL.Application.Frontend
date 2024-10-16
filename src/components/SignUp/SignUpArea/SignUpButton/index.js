import React from "react";
import "./styles.css";

export function BotaoCadastro({ onClick }) {
    return(
        <div className="cadastro-botao-area">
            <button className="cadastro-botao" onClick={onClick}>Confirmar</button>
        </div>
    );
}