import React, { useState } from "react";
import "./styles.css";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";

export default function Pesquisa({ placeholder }) {
    const [valor, setValor] = useState("");

    const handleChange = (event) => {
        setValor(event.target.value);
    };

    const handleClear = () => {
        setValor("");
    }

    return (
        <div className="pesquisa-area">
            <RiSearchLine className="pesquisa-icon" />
            <input 
                className="pesquisa-barra" 
                placeholder={placeholder} 
                type="search"
                value={valor}
                onChange={handleChange} 
            />
            {valor && (
                <RiCloseLine className="pesquisa-limpar" onClick={handleClear} />
            )}
        </div>
    );
}