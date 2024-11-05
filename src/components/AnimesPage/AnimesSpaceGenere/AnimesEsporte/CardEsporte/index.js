import React from 'react';
import './styles.css';

export default function CardEsporte({ cardImgEsporte, title, sinopse }) {
    return (
        <div className="container-card">
            <div className="card-anime-esporte"
                style={{ backgroundImage: `url(${cardImgEsporte})` }}
            >
            </div>

            <div className="card-space-content">
                <p className="card-esporte-tittle">
                    {title}
                </p>
                <p className="card-esporte-text">
                    {sinopse}
                </p>
            </div>

        </div>


    );
}

