import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom'; 
import { RiArrowLeftCircleFill, RiArrowRightCircleFill } from "react-icons/ri";
import CardAcao from "./CardAcao";
import Footer from "../../../Footer";
import Header from '../../../Header';
import { getJikanGenres } from '../../../../services/AnimeAPI/AnimeApi';

export default function AnimesAcao() {
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        const fetchAnimes = async () => {
            try {
                const animeGenre = await getJikanGenres(1);
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

    const handleNext = () => {
        if (currentIndex + itemsPerPage < animes.length) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    return (
        <div className="acao-area">
            <Header />
            <main className="acao-body">
                <div className="acao-back">
                    <div className="acao-icon-voltar">
                        <Link className="icon-return" to={"/animes"}>
                            <RiArrowLeftCircleFill className="button-return" alt="Fechar" />
                        </Link>
                    </div>
                    <p className="acao-tittle">Ação</p>
                </div>
                <div>
                    {animes.slice(currentIndex, currentIndex + itemsPerPage).map(anime => (
                        <CardAcao 
                            key={anime.id}
                            cardImgAcao={anime.image}
                            title={anime.title}
                            sinopse={anime.description}
                        />
                    ))}
                </div>
                <div className="translate">
                    <Link className="teste-1" onClick={handlePrev}>
                        <RiArrowLeftCircleFill className="button-translate" />
                    </Link>
                    
                    <Link className="teste-2" onClick={handleNext}>
                        <RiArrowRightCircleFill className="button-translate" />
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
