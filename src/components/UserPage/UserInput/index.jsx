import React from "react";
import './styles.css';

export default function UsuarioInput({ label, onChange, type, value }) {
    return (
        <div className="usuario-label-input">
            <label className="usuario-label">{label}</label>  
            <input 
                className="usuario-input" 
                value={value}
                onChange={onChange}
                type={type}
            />
        </div>
    );
}