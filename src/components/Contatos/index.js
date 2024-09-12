import React from 'react';
import "./styles.css";
import Header from '../Header';
import ContatosBemVindo from './ConatosPresentation';
import ContatosAdms from './ContatosAdm';
import bluelock from '../../assets/Images/Contatos/bluelock.png';

import backgroundCarlos from '../../assets/Images/Contatos/backgoundCarlos.png';
import backgroundFelipe from '../../assets/Images/Contatos/backgroundFelipe.png';
import backgroundJoao from '../../assets/Images/Contatos/backgroundJoao.png';
import backgroundNathan from '../../assets/Images/Contatos/backgroundNathan.png';
import backgroundPablo from '../../assets/Images/Contatos/backgroundPablo.png';
import backgroundWilliam from '../../assets/Images/Contatos/backgroundWilliam.png';
import backgroundWilson from '../../assets/Images/Contatos/backgroundWilson.png';




import { RiTrophyFill } from "react-icons/ri";



export default function ContatosAdm() {
    return (
        <div className="contatos-area">
            <Header />
            <main className="contatos-body">
                <ContatosBemVindo />

                <div className= "spaceAdm"> 
                <ContatosAdms  imgAnime={backgroundCarlos} ImgAdm={bluelock} name={"Carlos André"} Icons={<RiTrophyFill/>} />
                <ContatosAdms imgAnime={backgroundFelipe} ImgAdm={bluelock} name={"Felipe Ferreira"} Icons={<RiTrophyFill  className="icon-blue"/>} />
                <ContatosAdms imgAnime={backgroundJoao} ImgAdm={bluelock} name={"João Vitor"} Icons={<RiTrophyFill  className="icon-blue" />} />
                <ContatosAdms imgAnime={backgroundNathan} ImgAdm={bluelock} name={"Nathan Rodrigues" } Icons={<RiTrophyFill  className="icon-blue"/>} />
                <ContatosAdms imgAnime={backgroundPablo} ImgAdm={bluelock} name={"Pablo Candido" } Icons={<RiTrophyFill  className="icon-blue"/>} />
                <ContatosAdms imgAnime={backgroundWilliam} ImgAdm={bluelock} name={"William Patricio" } Icons={<RiTrophyFill  className="icon-blue"/>} />
                <ContatosAdms imgAnime={backgroundWilson} ImgAdm={bluelock} name={"Wilson B" } Icons={<RiTrophyFill  className="icon-blue"/>} />
                
                </div>
            </main>
        </div>
    );
}