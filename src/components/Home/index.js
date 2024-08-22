import React from "react";
import "./styles.css";
import logo from "../../assets/logo-animelink.svg";
import BotoesHome from "./HomeButtons";
import { RiGroupFill, RiHeart3Fill } from "react-icons/ri";
import img1 from "../../assets/Images/Home/intro-illustration-1.png";
import img2 from "../../assets/Images/Home/intro-illustration-2.png";
import Footer from "../Footer";

export default function HomeArea() {
    return (
        <div className="home-page">
            <header className="home-header">
                <img className="home-header-logo" src={logo} alt="AnimeLink" />
                <div className="home-header-text">
                    <h1 className="home-header-titulo">AnimeLink</h1>
                    <h2 className="home-header-intro">Entre ou cadastre-se para diversão em primeira mão</h2>
                    <BotoesHome />
                </div>
            </header>
            <main className="home-body">
                <h1 className="home-body-welcome">Bem vindo, otaku!</h1>
                <div className="home-intro-1">
                    <div className="home-intro-1-1">
                        <img src={img1} alt="Intro Img 1" />
                    </div>
                    <div className="home-intro-1-2">
                        <h1 className="home-intro-1-text">ENTRE EM COMUNIDADES E INTERAJA COM PESSOAS DO MESMO GOSTO QUE VOCê</h1>
                        <RiGroupFill className="home-intro-1-icon" alt="Grupo Icon" />  
                    </div>
                </div>
                <div className="home-intro-2">
                    <div className="home-intro-2-2">
                        <h1 className="home-intro-2-text">BUSQUE ONDE VOCÊ PODE ASSISTIR SEU ANIME FAVORITO</h1>
                        <RiHeart3Fill className="home-intro-2-icon" alt="Grupo Icon" />  
                    </div>
                    <div className="home-intro-2-1">
                        <img src={img2} alt="Intro Img 2" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}