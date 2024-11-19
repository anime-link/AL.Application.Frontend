import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom'; 
import CardAcao from "./CardAcao";
import Footer from "../../../Footer";
import Header from '../../../Header';
import { getJikanGenres } from '../../../../services/AnimeAPI/AnimeApi';
import { translateText } from '../../../../services/translateService'; // Importação do serviço de tradução
import ReactPaginate from 'react-paginate';
import { RiArrowLeftCircleFill } from "react-icons/ri";

export default function AnimesAcao() {
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAndTranslateAnimes = async () => {
            try {
                // Busca os animes do gênero "Ação"
                const animeGenre = await getJikanGenres(1);

                // Aplica a tradução nos títulos e descrições
                const translatedAnimes = await Promise.all(
                    animeGenre.map(async (anime) => ({
                        ...anime,
                        title: await translateText(anime.title, 'pt'),
                        description: await translateText(anime.description || 'Sem descrição disponível.', 'pt')
                    }))
                );

                setAnimes(translatedAnimes);
            } catch (error) {
                console.error('Erro ao buscar ou traduzir os animes de ação:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAndTranslateAnimes();
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
                    {currentAnimes.map(anime => (
                        <CardAcao 
                            key={anime.id}
                            cardImgAcao={anime.image}
                            title={anime.title} // Título traduzido
                            sinopse={anime.description} // Descrição traduzida
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
