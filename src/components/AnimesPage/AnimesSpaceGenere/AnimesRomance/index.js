import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom'; 
import CardRomance from "./CardRomance";
import Footer from "../../../Footer";
import Header from '../../../Header';
import { getJikanGenres } from '../../../../services/AnimeAPI/AnimeApi';
import ReactPaginate from 'react-paginate';
import { RiArrowLeftCircleFill} from "react-icons/ri";

export default function AnimesRomance() {
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        const fetchAnimes = async () => {
            try {
                const animeGenre = await getJikanGenres(8);
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

    return (
        <div className="romance-area">
            <Header />
            <main className="romance-body">
                <div className="romance-back">
                    <div className="romance-icon-voltar">
                        <Link className="icon-return" to={"/animes"}>
                            <RiArrowLeftCircleFill className="button-return" alt="Fechar" />
                        </Link>
                    </div>
                    <p className="romance-tittle">Romance</p>
                </div>
                <div>
                    {currentAnimes.map(anime => (
                        <CardRomance 
                            key={anime.id}
                            cardImgRomance={anime.image}
                            title={anime.title}
                            sinopse={anime.description}
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
