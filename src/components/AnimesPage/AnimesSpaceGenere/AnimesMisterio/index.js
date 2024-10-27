import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'; 
import { RiArrowLeftCircleFill } from "react-icons/ri";

import CardMisterio from "./CardMisterio";
import Footer from "../../../Footer";
import Header from '../../../Header';



export default function AnimesMisterio() {
    return (
        <div className="misterio-area">
            <Header/>
            <main className= "misterio-body">
                <diV className = "misterio-back">
                    <diV className="misterio-icon-voltar">
                        <Link className="icon-return" to={"/animes"}>
                            <RiArrowLeftCircleFill alt="Fechar"/>
                        </Link>
                    </diV>
                    <p className="misterio-tittle">Misterio</p>
                </diV>
                <div>
                <CardMisterio/>
                <CardMisterio/>
                <CardMisterio/>
                <CardMisterio/>
                <CardMisterio/>
                <CardMisterio/>
                <CardMisterio/>
                </div>
                
            </main>
            <Footer/>
        </div>
    );
}