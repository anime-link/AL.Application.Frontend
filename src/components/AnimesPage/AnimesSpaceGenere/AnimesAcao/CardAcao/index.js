import React from 'react';
import './styles.css';

export default function CardAcao({ cardImgAcao, title, sinopse }) {
    return (
        <div className="container-card">
            <div className="card-anime-acao"
                style={{ backgroundImage: `url(${cardImgAcao})` }}
            >
            </div>

            <div className="card-space-content">
                <p className="card-acao-tittle">
                    {title}
                </p>
                <p className="card-acao-text">
                    {sinopse}
                </p>
            </div>

        </div>


    );
}

