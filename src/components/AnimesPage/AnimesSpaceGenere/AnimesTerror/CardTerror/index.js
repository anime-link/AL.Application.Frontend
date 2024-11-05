import React from 'react';
import './styles.css';

export default function CardTerror({ cardImgTerror, title, sinopse }) {
    return (
        <div className="container-card">
            <div className="card-anime-terror"
                style={{ backgroundImage: `url(${cardImgTerror})` }}
            >
            </div>

            <div className="card-space-content">
                <p className="card-terror-tittle">
                    {title}
                </p>
                <p className="card-terror-text">
                    {sinopse}
                </p>
            </div>

        </div>


    );
}

