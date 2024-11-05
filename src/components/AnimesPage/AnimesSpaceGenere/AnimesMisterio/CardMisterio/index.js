import React from 'react';
import './styles.css';

export default function CardMisterio({ cardImgMisterio, title, sinopse }) {
    return (
        <div className="container-card">
            <div className="card-anime-misterio"
                style={{ backgroundImage: `url(${cardImgMisterio})` }}
            >
            </div>

            <div className="card-space-content">
                <p className="card-misterio-tittle">
                    {title}
                </p>
                <p className="card-misterio-text">
                    {sinopse}
                </p>
            </div>

        </div>


    );
}

