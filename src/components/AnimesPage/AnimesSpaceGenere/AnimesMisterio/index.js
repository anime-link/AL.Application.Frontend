import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'; 
import { RiArrowLeftCircleFill } from "react-icons/ri";

import CardMisterio from "./CardMisterio";
import Footer from "../../../Footer";
import Header from '../../../Header';



export default function AnimesEsporte() {
    return (
        <div className="acao-area">
            <Header/>
            <main className= "misterio-body">
                <diV className = "misterio-back">
                    <diV className="misterio-icon-voltar">
                        <Link className="icon-return">
                            <RiArrowLeftCircleFill/>
                        </Link>
                    </diV>
                    <p className="acao-tittle">Romance</p>
                </diV>
                <div></div>

                <div>
                <CardMisterio/>
                
                </div>
                
            </main>
            <Footer/>
        </div>
    );
}