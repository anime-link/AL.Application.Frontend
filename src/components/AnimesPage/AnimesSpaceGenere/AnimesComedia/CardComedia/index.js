import React from 'react';
import './styles.css';

export default function CardAComedia({ cardImgComedia, title, sinopse }) {
    return (
        <div className="container-card">
            <div className="card-anime-comedia"
                style={{ backgroundImage: `url(${cardImgComedia})` }}
            >
            </div>

            <div className="card-space-content">
                <p className="card-comedia-tittle">
                    {title}
                </p>
                <p className="card-comedia-text">
                    {sinopse}
                </p>
            </div>

        </div>


    );
}

