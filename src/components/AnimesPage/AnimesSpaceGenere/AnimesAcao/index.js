import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'; 
import { RiArrowLeftCircleFill } from "react-icons/ri";

import CardAcao from "./CardAcao";
import Footer from "../../../Footer";
import Header from '../../../Header';



export default function AnimesAcao() {
    return (
        <div className="acao-area">
            <Header/>
            <main className= "acao-body">
                <diV className = "acao-back">
                    <diV className="acao-icon-voltar">
                        <Link className="icon-return" to={"/animes"}>
                            <RiArrowLeftCircleFill  alt= "Fechar"/>
                        </Link>
                    </diV>
                    <p className="acao-tittle">Ação</p>
                </diV>
                <div>
                <CardAcao/>
                <CardAcao/>
                <CardAcao/>
                <CardAcao/>
                <CardAcao/>
                <CardAcao/>
                <CardAcao/>
                </div>
                
            </main>
            <Footer/>
        </div>
    );
}