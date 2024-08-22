import React from "react";
import "./styles.css";
import { RiSearchLine } from "react-icons/ri";

export default function Pesquisa({ placeholder }) {
    return (
        <div className="pesquisa-area">
            <RiSearchLine className="pesquisa-icon" />
            <input 
                className="pesquisa-barra" 
                placeholder={placeholder} 
                type="search" 
            />
        </div>
    );
}