import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom'; 
import { RiArrowLeftCircleFill } from "react-icons/ri";

import CardAcao from "./CardAcao";
import Footer from "../../../Footer";
import Header from '../../../Header';
import { getJikanGenres } from '../../../../services/AnimeAPI/AnimeApi';



export default function AnimesAcao() {
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnimes = async () => {
            try {
                const animeGenre = await getJikanGenres(4);
                setAnimes(animeGenre);
            } catch (error) {
                console.error('Erro ao buscar os animes de tal gênero: ', error);
            } finally {
                setLoading(false);
            }
        }

        fetchAnimes();

    }, []);

    if (loading) return <div>Carregando...</div>;

    return (
        <div className="acao-area">
            <Header/>
            <main className= "acao-body">
                <diV className = "acao-back">
                    <diV className="acao-icon-voltar">
                        <Link className="icon-return" to={"/animes"}>
                            <RiArrowLeftCircleFill  alt= "Fechar"/>
                        </Link>
                    </diV>
                    <p className="acao-tittle">Ação</p>
                </diV>
                <div>
                    {animes.map(anime => (
                        <CardAcao 
                            key={anime.id}
                            cardImgAcao={anime.image}
                            title={anime.title}
                            sinopse={anime.description}
                        />
                    ))}
                </div>
                
            </main>
            <Footer/>
        </div>
    );
}