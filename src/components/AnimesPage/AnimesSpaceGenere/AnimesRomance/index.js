import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'; 
import { RiArrowLeftCircleFill } from "react-icons/ri";

import CardRomance from "./CardRomance";
import Footer from "../../../Footer";
import Header from '../../../Header';



export default function AnimesRomance() {
    return (
        <div className="romance-area">
            <Header/>
            <main className= "romance-body">
                <diV className = "romance-back">
                    <diV className="romance-icon-voltar">
                        <Link className="icon-return" to={"/animes"}>
                            <RiArrowLeftCircleFill alt="Fechar"/>
                        </Link>
                    </diV>
                    <p className="romance-tittle">Romance</p>
                </diV>
                <div>
                <CardRomance/>
                <CardRomance/>
                <CardRomance/>
                <CardRomance/>
                <CardRomance/>
                <CardRomance/>
                <CardRomance/>
                </div>
                
            </main>
            <Footer/>
        </div>
    );
}