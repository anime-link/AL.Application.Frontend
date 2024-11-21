import React from "react";
import './styles.css';

export default function UsuarioInput({ label }) {
    return (
        <div className="usuario-label-input">
            <label className="usuario-label">{label}</label>  
            <input className="usuario-input" />
        </div>
    );
}