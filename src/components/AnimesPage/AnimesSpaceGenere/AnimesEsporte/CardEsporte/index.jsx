import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function CardEsporte({ cardImgEsporte, title, sinopse, handleAnimePage }) {
    return (
        <div className="container-card">
            <div className="card-anime-esporte"
                style={{ backgroundImage: `url(${cardImgEsporte})` }}
                onClick={handleAnimePage}
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

