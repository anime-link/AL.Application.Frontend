import React from "react";
import "./styles.css";
import logo from "../../assets/logo-animelink.svg";
import BotoesHome from "./HomeButtons";
import { RiArrowDownFill, RiGithubFill, RiGroupFill, RiHeart3Fill, RiInstagramFill, RiLinkedinFill, RiMailFill, RiQuestionMark } from "react-icons/ri";
import img1 from "../../assets/Images/Home/intro-illustration-1.png";
import img2 from "../../assets/Images/Home/intro-illustration-2.png";
import Footer from "../Footer";

export default function HomeArea() {
    return (
        <div className="home-page">
            <header className="home-header">
                <div className="home-header-text">
                    <h1 className="home-header-titulo-1">Anime</h1>
                    <h1 className="home-header-titulo-2">Link</h1>
                    <h2 className="home-header-intro">Entre ou cadastre-se para diversão em primeira mão</h2>
                    <BotoesHome />
                </div>
                <img className="home-header-logo" src={logo} alt="AnimeLink" />
            </header>
            <div className="home-body">
                <div className="home-body-boasvindas">
                    <RiArrowDownFill className="home-body-boasvindas-icon" />
                    <h1 className="home-body-welcome">Bem vindo, otaku!</h1>
                    <RiArrowDownFill className="home-body-boasvindas-icon" />
                </div>
                <div className="home-apresentacao">
                    <div className="home-apresentacao-1">
                        <div className="home-apresentacao-1-ilustracao">
                            <img className="home-apresentacao-1-img" src={img1} alt="Apresentação 1" />
                            <RiGroupFill className="home-apresentacao-1-icon" />
                        </div>
                        <p className="home-apresentacao-1-texto">ENTRE EM COMUNIDADES E INTERAJA COM PESSOAS DO MESMO GOSTO QUE VOCê</p>
                    </div>
                    <hr className="home-apresentacao-divisao" />
                    <div className="home-apresentacao-2">
                        <p className="home-apresentacao-2-texto">BUSQUE ONDE VOCÊ PODE ASSISTIR SEU ANIME FAVORITO</p>
                        <div className="home-apresentacao-2-ilustracao">
                            <RiHeart3Fill className="home-apresentacao-2-icon" />
                            <img className="home-apresentacao-2-img" src={img2} alt="Apresentação 2" />
                        </div>
                    </div>
                    <hr className="home-apresentacao-divisao" />
                    <div className="home-apresentacao-3">
                        <p className="home-apresentacao-3-texto">CONTATE-NOS E FAÇA SUGESTÕES</p>
                        <div className="home-apresentacao-3-ilustracao">
                            <div className="home-apresentacao-3-redes">
                                <RiGithubFill className="home-apresentacao-3-git"/>
                                <RiLinkedinFill className="home-apresentacao-3-link" />
                            </div>
                            <RiQuestionMark className="home-apresentacao-3-icon" />
                            <div className="home-apresentacao-3-redes">
                                <RiInstagramFill className="home-apresentacao-3-inst" />
                                <RiMailFill className="home-apresentacao-3-mail" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}