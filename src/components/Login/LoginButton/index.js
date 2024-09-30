import React from "react";
import "./styles.css";

export function BotaoAvancar({ onClick }) {
    return(
        <div className="avancar-botao-area">
            <button className="avancar-botao" onClick={onClick}>Avançar</button>
        </div>
    );
}