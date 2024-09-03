import React from 'react';
import "./styles.css";
import Header from '../Header';
import Pesquisa from "../Search";
import AnimesesLancamentos from './AnimesLaunch';
import AnimesRanking from './AnimesRanking';


export default function AnimesArea(){


    return(
        <div className="animes-area">
            <Header/>
            <main className="animes-body">
                <Pesquisa className="animes-search" placeholder={"Pesquisar Animes"} />
                <AnimesesLancamentos/>
                <AnimesRanking anime='teste' number='umnumeroqualquer'/>
                {/* <Footer /> */}
            </main>
        </div>
    );
}