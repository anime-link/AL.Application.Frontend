import React from 'react';
import "./styles.css";

export default function ContatosAdms({ ImgAdm, name, Icons, imgAnime }) {
    return (
        <div
            className="adm-anime"
            // style={{ backgroundImage: `url(${imgAnime})` }}
        >
            <div className="adm-card">
                <img>{ImgAdm}</img>
                <h1> {name}</h1>
                <footer>{Icons}</footer>
            </div>


        </div>

    );
}