// AnimesArea.js
import React from 'react';
import "./styles.css";
import Header from '../Header';
import Pesquisa from "../Search";
import AnimesesLancamentos from './AnimesLaunch';
import AnimesRanking from './AnimesRanking';
import AnimeCards from './AnimesCards';
import img1 from '../../assets/Images/Animes/animes1.png';
import img2 from '../../assets/Images/Animes/animes2.png';

export default function AnimesArea() {
    // Lista de animes e seus números de ranking
    const ranking1 = [
        { anime: 'Naruto', number: '1' },
        { anime: 'Naruto', number: '2' },
        { anime: 'Naruto', number: '3' },
        { anime: 'Naruto', number: '4' },
        { anime: 'Naruto', number: '5' },
    ];

    const ranking2 = [
        { anime: 'Naruto', number: '1' },
        { anime: 'Noragami', number: '2' },
        { anime: 'Naruto', number: '3' },
        { anime: 'Naruto', number: '4' },
        { anime: 'Naruto', number: '5' },
    ];

    return (
        <div className="animes-area">
            <Header />
            <main className="animes-body">
                <Pesquisa className="animes-search" placeholder="Pesquisar Animes" />
                <AnimesesLancamentos />
                <div className="ranking-container">
                    <div className="list1">
                        <AnimesRanking rankingList={ranking1} />
                    </div>
                    <div className="list2">
                        <AnimesRanking rankingList={ranking2} />
                    </div>
                </div>
                <hr className="ranking-divisao" />
                <>
                <ul>
                    <li>
                    <AnimeCards nome="Ação" imgAnime={img1} />
                    <AnimeCards nome="Terror" imgAnime={img2} />
                    </li>
                    <li>
                    <AnimeCards nome="Comédia" imgAnime={img1} />
                    <AnimeCards nome="Romance" imgAnime={img2} />
                    </li>
                    <li>
                    <AnimeCards nome="Esporte" imgAnime={img1} />
                    <AnimeCards nome="Mistério" imgAnime={img2} />
                    </li>
                </ul>
                </> 
            </main>
        </div>
    );
}
