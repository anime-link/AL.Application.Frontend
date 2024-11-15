import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom'; 
import CardEsporte from "./CardEsporte";
import Footer from "../../../Footer";
import Header from '../../../Header';
import { getJikanGenres } from '../../../../services/AnimeAPI/AnimeApi';
import { translateText } from '../../../../services/translateService'; 
import ReactPaginate from 'react-paginate';
import { RiArrowLeftCircleFill } from "react-icons/ri";

export default function AnimesEsporte() {
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAndTranslateAnimes = async () => {
            try {
                const animeGenre = await getJikanGenres(30);
                console.log(Object.keys(animeGenre).length)
                setAnimes(animeGenre);
                const translatedAnimes = await Promise.all(
                    animeGenre.map(async (anime) => ({
                        ...anime,
                        title: await translateText(anime.title, 'pt'),
                        description: await translateText(anime.description || 'Sem descrição disponível.', 'pt')
                    }))
                );
                setAnimes(translatedAnimes);
            } catch (error) {
                console.error('Erro ao buscar ou traduzir os animes de esporte:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAndTranslateAnimes();
    }, []);

    if (loading) return <div>Carregando...</div>;

    const offset = currentPage * itemsPerPage;
    const currentAnimes = animes.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(animes.length / itemsPerPage);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const handleAnimePage = (animeId) => {
        navigate(`/anime/${animeId}`);
    };

    return (
        <div className="esporte-area">
            <Header />
            <main className="esporte-body">
                <div className="esporte-back">
                    <div className="esporte-icon-voltar">
                        <Link className="icon-return" to={"/animes"}>
                            <RiArrowLeftCircleFill className="button-return" alt="Fechar" />
                        </Link>
                    </div>
                    <p className="esporte-tittle">Esporte</p>
                </div>
                <div>
                    {currentAnimes.map(anime => (
                        <CardEsporte 
                            key={anime.id}
                            cardImgEsporte={anime.image}
                            title={anime.title}
                            sinopse={anime.description}
                            handleAnimePage={() => handleAnimePage(anime.id)}
                        />
                    ))}
                </div>
                <ReactPaginate
                    className="text_pagination"
                    previousLabel={"Anterior"}
                    nextLabel={"Próximo"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />
            </main>
            <Footer />
        </div>
    );
}
