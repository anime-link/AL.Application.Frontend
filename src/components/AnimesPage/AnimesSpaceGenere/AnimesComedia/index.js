import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'; 
import { RiArrowLeftCircleFill } from "react-icons/ri";

import CardComedia from "./CardComedia";
import Footer from "../../../Footer";
import Header from '../../../Header';



export default function AnimesComedia() {
    return (
        <div className="comedia-area">
            <Header/>
            <main className= "comedia-body">
                <diV className = "comedia-back">
                    <diV className="comedia-icon-voltar">
                        <Link className="icon-return" to={"/animes"}>
                            <RiArrowLeftCircleFill  alt= "Fechar"/>
                        </Link>
                    </diV>
                    <p className="comedia-tittle">Comedia</p>
                </diV>
                <div></div>

                <div>
                <CardComedia/>
                <CardComedia/>
                <CardComedia/>
                <CardComedia/>
                <CardComedia/>
                <CardComedia/>
                <CardComedia/>
                </div>
                
            </main>
            <Footer/>
        </div>
    );
}