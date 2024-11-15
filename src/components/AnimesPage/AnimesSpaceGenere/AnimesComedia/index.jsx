import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom'; 
import CardComedia from "./CardComedia";
import Footer from "../../../Footer";
import Header from '../../../Header';
import { getJikanGenres } from '../../../../services/AnimeAPI/AnimeApi';
import ReactPaginate from 'react-paginate';
import { RiArrowLeftCircleFill} from "react-icons/ri";

import { BACKEND_URL } from '../../../config';

export default function AnimesComedia() {

    // console.log( "Backend:" + BACKEND_URL);


    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAnimes = async () => {
            try {
                const animeGenre = await getJikanGenres(4);
                console.log(Object.keys(animeGenre).length)
                setAnimes(animeGenre);
            } catch (error) {
                console.error('Erro ao buscar os animes de tal gênero: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnimes();
    }, []);

    if (loading) return <div>Carregando...</div>;

    // Cálculo de animes a serem exibidos na página atual
    const offset = currentPage * itemsPerPage;
    const currentAnimes = animes.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(animes.length / itemsPerPage);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const handleAnimePage = (animeId) => {
        navigate(`/anime/${animeId}`);
    }

    return (
        <div className="comedia-area">
            <Header />
            <main className="comedia-body">
                <div className="comedia-back">
                    <div className="comedia-icon-voltar">
                        <Link className="icon-return" to={"/animes"}>
                            <RiArrowLeftCircleFill className="button-return" alt="Fechar" />
                        </Link>
                    </div>
                    <p className="comedia-tittle">Comedia</p>
                </div>
                <div>
                    {currentAnimes.map(anime => (
                        <CardComedia
                            key={anime.id}
                            cardImgComedia={anime.image}
                            title={anime.title}
                            sinopse={anime.description}
                            handleAnimePage={() => handleAnimePage(anime.id)}
                        />
                    ))}
                </div>
                {/* Componente de Paginação */}
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
