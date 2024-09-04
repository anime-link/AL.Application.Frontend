import React from 'react';
import "./styles.css";
import Header from '../Header';
import Pesquisa from "../Search";
import AnimesesLancamentos from './AnimesLaunch';
import AnimesRanking from './AnimesRanking';

export default function AnimesArea() {
    // Lista de animes e seus números de ranking
    const ranking1 = [
        { anime: 'Naruto', number: '1' },
        { anime: 'Naruto', number: '2' },
        { anime: 'Naruto', number: '3' },
        { anime: 'Naruto', number: '4' },
        { anime: 'Naruto', number: '5' },
        // Adicione mais itens conforme necessário
    ];

    const ranking2 = [
        { anime: 'Naruto', number: '1' },
        { anime: 'Noragami', number: '2' },
        { anime: 'Naruto', number: '3' },
        { anime: 'Naruto', number: '4' },
        { anime: 'Naruto', number: '5' },
        // Adicione mais itens conforme necessário
    ];


    return (
        <div className="animes-area">
            <Header />
            <main className="animes-body">
                <Pesquisa className="animes-search" placeholder="Pesquisar Animes" />
                <AnimesesLancamentos />
                <div className= "ranking-container">

                <div className= "list1">
                <AnimesRanking rankingList={ranking1} />
                </div>

                <div className= "list2">
                <AnimesRanking rankingList={ranking2} />
                </div>

                </div>
                
                {/* <Footer /> */}
            </main>
        </div>
    );
}