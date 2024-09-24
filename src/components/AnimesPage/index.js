// AnimesArea.js
import React from 'react';
import "./styles.css";
import Header from '../Header';
import Pesquisa from "../Search";
import AnimesesLancamentos from './AnimesLaunch';
import AnimesRanking from './AnimesRanking';
import AnimeCards from './AnimesCards';
import acao from '../../assets/Images/AnimesCard/acao.png';
import romance from '../../assets/Images/AnimesCard/romance.png';
import terror from '../../assets/Images/AnimesCard/terror.png';
import comedia from '../../assets/Images/AnimesCard/comedia.png';
import misterio from '../../assets/Images/AnimesCard/misterio.png';
import esporte from '../../assets/Images/AnimesCard/esporte.png';
import Footer from "../Footer";

export default function AnimesArea() {
    
    return (
        <div className="animes-area">
            <Header />
            <main className="animes-body">
                <Pesquisa className="animes-search" placeholder="Pesquisar Animes" />
                <AnimesesLancamentos />
                <div className="ranking-container">

                    <p className="titulo-card">Top 5</p>
                    <AnimesRanking colocacao={"1"}  rankingNome={"Naruto"} />
                    <AnimesRanking colocacao={"2"}  rankingNome={"One Piece"} />
                    <AnimesRanking colocacao={"3"}  rankingNome={"Noragami"} />
                    <AnimesRanking colocacao={"4"}  rankingNome={"Classroom of The Elite"} />
                    <AnimesRanking colocacao={"5"}  rankingNome={"Goblins Layer"} />
                    
                </div>
                <hr className="ranking-divisao" />
                <>
                <ul>
                    <li>
                    <AnimeCards nome="Ação" imgAnime={acao} />
                    <AnimeCards nome="Terror" imgAnime={terror} />
                    </li>
                    <li>
                    <AnimeCards nome="Comédia" imgAnime={comedia} />
                    <AnimeCards nome="Romance" imgAnime={romance} />
                    </li>
                    <li>
                    <AnimeCards nome="Esporte" imgAnime={esporte} />
                    <AnimeCards nome="Mistério" imgAnime={misterio} />
                    </li>
                </ul>
                </> 
            </main>
            <Footer/>
        </div>
    );
}
