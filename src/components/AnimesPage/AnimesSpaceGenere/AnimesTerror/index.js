import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'; 
import { RiArrowLeftCircleFill } from "react-icons/ri";

import CardTerror from "./CardTerror";
import Footer from "../../../Footer";
import Header from '../../../Header';



export default function AnimesTerror() {
    return (
        <div className="terror-area">
            <Header/>
            <main className= "terror-body">
                <diV className = "terror-back">
                    <diV className="terror-icon-voltar">
                        <Link className="icon-return" to={"/animes"}>
                            <RiArrowLeftCircleFill alt="Fechar"/>
                        </Link>
                    </diV>
                    <p className="acao-tittle">Terror</p>
                </diV>
                <div>
                <CardTerror/>
                <CardTerror/>
                <CardTerror/>
                <CardTerror/>
                <CardTerror/>
                <CardTerror/>
                <CardTerror/>
                </div>
                
            </main>
            <Footer/>
        </div>
    );
}