import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'; 
import { RiArrowLeftCircleFill } from "react-icons/ri";

import CardEsporte from "./CardEsporte";
import Footer from "../../../Footer";
import Header from '../../../Header';



export default function AnimesEsporte() {
    return (
        <div className="esporte-area">
            <Header/>
            <main className= "esporte-body">
                <diV className = "esporte-back">
                    <diV className="esporte-icon-voltar">
                        <Link className="icon-return">
                            <RiArrowLeftCircleFill/>
                        </Link>
                    </diV>
                    <p className="acao-tittle">Esporte</p>
                </diV>
                <div></div>

                <div>
                <CardEsporte/>
                <CardEsporte/>
                <CardEsporte/>
                <CardEsporte/>
                <CardEsporte/>
                <CardEsporte/>
                <CardEsporte/>
                </div>
                
            </main>
            <Footer/>
        </div>
    );
}