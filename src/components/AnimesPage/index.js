import React from 'react';
import "./styles.css";
import Header from '../Header';
import Pesquisa from "../Search";
import Footer from "../Footer";
import AnimesesLancamentos from './AnimesLaunch';
import animes1 from "../../assets/Images/Animes/animes1.png";
import animes2 from "../../assets/Images/Animes/animes2.png"
import animes3 from "../../assets/Images/Animes/animes3.png"


export default function AnimesArea(){
    const imgAnimes = [
        animes1,
        animes2,
        animes3,
    ];


    return(
        <div className="animes-area">
            <Header/>
            <main className="animes-body">
                <Pesquisa className="animes-search" placeholder={"Pesquisar Animes"} />
                <AnimesesLancamentos animes={imgAnimes} />
                {/* <Footer /> */}
            </main>
        </div>
    );
}