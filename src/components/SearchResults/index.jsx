import React, { useEffect, useState } from 'react';
import './styles.css';
import Header from '../Header';
import { RiArrowLeftCircleFill } from 'react-icons/ri';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import community1 from '../../assets/Images/Communities/community1.png';
import community2 from '../../assets/Images/Communities/community2.png';
import community3 from '../../assets/Images/Communities/community3.png';
import community4 from '../../assets/Images/Communities/community4.png';
import community5 from '../../assets/Images/Communities/community5.png';
import community6 from '../../assets/Images/Communities/community6.png';

export default function ResultadosPesquisa() {
    const [resultados, setResultados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [tipo, setTipo] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    // Função de buscar animes
    const fetchAnimes = async (query) => {
        try {

            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
            const data = await response.json();

            if (!response.ok) {
                throw new Error("Erro ao buscar animes: ", response.status);
            }

            if (!data || !data.data) {
                throw new Error("Dados incompletos da API");
            }

            return data.data.map(anime => ({
                id: anime.mal_id,
                nome: anime.title,
                imagem: anime.images.jpg.image_url,
                tipo: 'anime'
            }));
        } catch (error) {
            console.error("Erro ao buscar animes: ", error);
            return [];
        }
    }

    // Função de buscar comunidades]
    const fetchComunidades = async (query) => {
        const comunidades = [
            { id: 1, nome: "Comunidade 1", imagem: community1 },
            { id: 2, nome: "Comunidade 2", imagem: community2 },
            { id: 3, nome: "Comunidade 3", imagem: community3 },
            { id: 4, nome: "Comunidade 4", imagem: community4 },
            { id: 5, nome: "Comunidade 5", imagem: community5 },
            { id: 6, nome: "Comunidade 6", imagem: community6 },
        ];

        return comunidades.filter(comunidade => 
            comunidade.nome.toLowerCase().includes(query.toLowerCase())
        );
    };

    // Função que identifica os parâametros da URL
    const getQueryParams = () => {
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get("q") || "";
        const tipo = searchParams.get("tipo") || "anime";
        return { query, tipo };
    }

    // Função para carregar os resultados de acordo com o tipo
    const carregarResultados = async () => {
        const { query, tipo } = getQueryParams();
        setTipo(tipo);
        setLoading(true);

        let dados = [];

        if (tipo === "anime") {
            dados = await fetchAnimes(query);
        } else if (tipo === "comunidade") {
            dados = await fetchComunidades(query);
        }

        setResultados(dados);
        setLoading(false);
    }

    // Carrega os dados ao montar o componente ou a URL muda
    useEffect(() => {
        carregarResultados();
    }, [location.search]);

    const handleClick = (animeId) => {
        if (tipo === 'anime') {
            navigate(`/anime/${animeId}`);
        } else if (tipo === 'comunidade') {
            navigate('/chat');
        }
    }

    const handleBackPage = () => {
        if (tipo === 'anime') {
            navigate('/animes');
        } else if (tipo === 'comunidade') {
            navigate('/comunidades');
        }
    }

    return (
        <div className='resultados-pagina'>
            <Header />
            <button className='resultados-icon-voltar' onClick={handleBackPage} >
                <RiArrowLeftCircleFill fontSize={60} />
            </button>
            <div className='resultados-resul'>
                <h1 className='resultados-titulo'>Resultados para "{getQueryParams().query}"</h1>
                {loading ? (
                    <p className='resultados-msg'>Carregando...</p>
                ) : (
                    <div className='resultados-lista'>
                        {resultados.length === 0 ? (
                            <p className='resultados-msg'>Nenhum resultado encontrado</p>
                        ) : (
                            resultados.map((item) => (
                                <div key={item.id} className='resultado-item' onClick={() => handleClick(item.id)}>
                                    <img
                                        src={item.imagem}
                                        width={350}
                                        height={182}
                                        alt={item.nome}
                                    />
                                    <div className='resultado-texto'>
                                        <p className='resultado-nome'>{item.nome}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}