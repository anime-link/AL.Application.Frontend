import React from 'react';
import "./styles.css";
import Header from '../Header';
import ContatosBemVindo from './ContactPresentation';
import ContatosAdms from './ContactsAdm';
import Footer from '../Footer';

import perfilCarlos from '../../assets/Images/Contatos/perfilCarlos.png';
import perfilFelipe from '../../assets/Images/Contatos/perfilFelipe.png';
import perfilJoao from '../../assets/Images/Contatos/perfilJoao.png';
import perfilNathan from '../../assets/Images/Contatos/perfilNathan.png';
import perfilPablo from '../../assets/Images/Contatos/perfilPablo.png';
import perfilWilliam from '../../assets/Images/Contatos/perfilWilliam.png';
import perfilWilson from '../../assets/Images/Contatos/perfiWilson.png';

import backgroundCarlos from '../../assets/Images/Contatos/backgoundCarlos.png';
import backgroundFelipe from '../../assets/Images/Contatos/backgroundFelipe.png';
import backgroundJoao from '../../assets/Images/Contatos/backgroundJoao.png';
import backgroundNathan from '../../assets/Images/Contatos/backgroundNathan.png';
import backgroundPablo from '../../assets/Images/Contatos/backgroundPablo.png';
import backgroundWilliam from '../../assets/Images/Contatos/backgroundWilliam.png';
import backgroundWilson from '../../assets/Images/Contatos/backgroundWilson.png';




import { RiGithubFill } from "react-icons/ri";



export default function ContatosAdm() {
    return (
        <div className="contatos-area">
            <Header />
            <main className="contatos-body">
                <ContatosBemVindo />
                <div className= "spaceAdm"> 
                <ContatosAdms  imgAnime={backgroundCarlos} ImgAdm={perfilCarlos} name={"Carlos André"} linksGit="https://github.com/4nc13ntS0ul" Icons={<RiGithubFill className="icon-blue"/>} />
                <ContatosAdms imgAnime={backgroundFelipe} ImgAdm={perfilFelipe} name={"Felipe Ferreira"} linksGit="https://github.com/felipeFerreiraffl" Icons={<RiGithubFill  className="icon-blue"/>} />
                <ContatosAdms imgAnime={backgroundJoao} ImgAdm={perfilJoao} name={"João Vitor"} linksGit="https://github.com/JoaoVGomees" Icons={<RiGithubFill  className="icon-blue" />} />
                <ContatosAdms imgAnime={backgroundNathan} ImgAdm={perfilNathan} name={"Nathan Rodrigues" } linksGit="https://github.com/nathanrodriguees" Icons={<RiGithubFill  className="icon-blue"/>} />
                <ContatosAdms imgAnime={backgroundPablo} ImgAdm={perfilPablo} name={"Pablo Candido" } linksGit="https://github.com/Pablocdeoliveira" Icons={<RiGithubFill  className="icon-blue"/>} />
                <ContatosAdms imgAnime={backgroundWilliam} ImgAdm={perfilWilliam} name={"William Patricio" } linksGit="https://github.com/williampss" Icons={<RiGithubFill  className="icon-blue"/>} />
                <ContatosAdms imgAnime={backgroundWilson} ImgAdm={perfilWilson} name={"Wilson Benacchio" } linksGit="https://github.com/WilsonBenacchio" Icons={<RiGithubFill  className="icon-blue"/>} />
                </div>
            </main>
            <Footer/>
        </div>
    );
}