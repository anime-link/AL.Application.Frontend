import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'; 
import { RiArrowLeftCircleFill } from "react-icons/ri";

import CardAcao from "./CardRomance";
import Footer from "../../../Footer";
import Header from '../../../Header';



export default function AnimesAcao() {
    return (
        <div className="acao-area">
            <Header/>
            <main className= "acao-body">
                <diV className = "acao-back">
                    <diV className="acao-icon-voltar">
                        <Link className="icon-return">
                            <RiArrowLeftCircleFill/>
                        </Link>
                    </diV>
                    <p className="acao-tittle">Romance</p>
                </diV>
                <div></div>

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