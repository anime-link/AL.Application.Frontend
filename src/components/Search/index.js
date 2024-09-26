import React, { useState } from "react";
import "./styles.css";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import pochita from "../../assets/Images/Communities/pochita-img.png";

export default function Pesquisa({ placeholder, sugestoes = [] }) {
    const [valor, setValor] = useState("");
    const [filtrarSugestoes, setFiltrarSugestoes] = useState([]);
    const [emFoco, setEmFoco] = useState(false); // Verificar se está em selecionado a barra

    // Mudar o valor da pesquisa
    const handleChange = (event) => {
        const input = event.target.value 
        setValor(input);

        // Filtração de sugestões
        if (input.length > 0) {
            // Inclui palavras minúsculas
            const filtrado = sugestoes.filter(sugestao =>
                sugestao.toLowerCase().includes(input.toLowerCase())
                
            );
            setFiltrarSugestoes(filtrado);
        } else {
            setFiltrarSugestoes([]);
        }
    };

    // Limpar a pesquisa
    const handleClear = () => {
        setValor("");
        setFiltrarSugestoes([]);
    }

    const handleFocus = () => setEmFoco(true);
    const handleBlur = () => setTimeout(() => setEmFoco(false), 200);

    return (
        <div className="pesquisa-area">
            <RiSearchLine className="pesquisa-icon" />
            <input 
                className="pesquisa-barra" 
                placeholder={placeholder} 
                type="search"
                value={valor}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur} 
            />
            {valor && (
                <RiCloseLine className="pesquisa-limpar" onClick={handleClear} />
            )}
            {/* Área de pesquisa */}
            {(emFoco || valor) && (
                <div className="pesquisa-sugestoes">
                    {!valor && 
                        <div className="pesquisa-msg-default">
                            <p className="pesquisa-msg">O que desejas procurar?</p>
                        </div>
                    }
                    {valor && filtrarSugestoes.length === 0 && (
                        <div className="pesquisa-sem-sugestoes">
                            <img className="pesquisa-sem-img" src={pochita} alt="Pochita" />
                            <p className="pesquisa-sem-msg">Não encontrei nada...</p>
                        </div>
                    )}
                    {filtrarSugestoes.map((sugestao, index) => (
                        <div key={index} className="pesquisa-item">
                            {sugestao}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}