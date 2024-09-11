import React from 'react';
import "./styles.css";

export default function ContatosAdms({ ImgAdm, name, Icons, imgAnime }) {
    return (
            <div className="adm-card"  
            style={{ backgroundImage: `url(${imgAnime})` }}            
            >
                <img className="imgAdm" src={ImgAdm} alt="imgAdm" />
                <div className="admPerfil">
                
                    <p> {name}</p>
                    <a>{Icons}</a>
                </div>
            </div>
    );
}