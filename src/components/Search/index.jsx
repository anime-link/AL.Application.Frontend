import React, { useState } from "react";
import "./styles.css";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";
import pochita from "../../assets/Images/Communities/pochita-img.png";
import { useNavigate } from "react-router-dom";

export default function Pesquisa({ placeholder, sugestoes = [], tipo }) {
    const [valor, setValor] = useState("");
    const [filtrarSugestoes, setFiltrarSugestoes] = useState([]);
    const [emFoco, setEmFoco] = useState(false); // Verificar se está em selecionado a barra
    const navigate = useNavigate();

    // Busca animes
    const fetchAnimes = async (input) => {
        try {
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${input}`);
            const data = await response.json();

            // Atualização de sugestões baseada na API
            const animes = data.data.map(anime => ({
                nome: anime.title,
                imagem: anime.images.jpg.image_url,
                id: anime.mal_id,
                tipo: 'anime'
            }))

            return animes;
        } catch (error) {
            console.error('Erro ao buscar anime: ', error);
            return [];
        }
    }

    // Mudar o valor da pesquisa e buscar de acordo com o tipo
    const handleChange = async (event) => {
        const input = event.target.value 
        setValor(input);

        // Filtração de sugestões
        if (input.length > 2) {
            let todasSugestoes = [];

            // Filtração de dados
            if (tipo === 'anime') {
                // Caso seja anime, busca animes da API
                todasSugestoes = await fetchAnimes(input);

            } else if (tipo === 'comunidade') {
                // Se for comunidade, filtra as comunidades
                // Inclui palavras minúsculas
                todasSugestoes = sugestoes.filter(sugestao =>
                    sugestao.nome.toLowerCase().includes(input.toLowerCase())
                );
            }

            setFiltrarSugestoes(todasSugestoes);
        } else {
            setFiltrarSugestoes([]);
        }
    };

    const handleSuggestionClick = (id, tipo) => {
        if (tipo === 'anime') {
            navigate(`/anime/${id}`);
        }
    }

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
                    {filtrarSugestoes.length > 0 && (
                        <h1 className="pesquisa-titulo">{filtrarSugestoes.length} resultados</h1>
                    )}
                    {filtrarSugestoes.map((sugestao, index) => (
                        <div 
                            key={index} 
                            className="pesquisa-item" 
                            onClick={() => handleSuggestionClick(sugestao.id, tipo)}
                        >
                            <img className="pesquisa-imagem" src={sugestao.imagem} alt={sugestao.nome} />
                            <p className="pesquisa-nome">{sugestao.nome}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}