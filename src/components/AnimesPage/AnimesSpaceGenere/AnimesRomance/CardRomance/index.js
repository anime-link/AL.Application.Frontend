import React from 'react';
import './styles.css';

export default function CardRomance({ cardImgRomance, title, sinopse }) {
    return (
        <div className="container-card">
            <div className="card-anime-romance"
                style={{ backgroundImage: `url(${cardImgRomance})` }}
            >
            </div>

            <div className="card-space-content">
                <p className="card-romance-tittle">
                    {title}
                </p>
                <p className="card-romance-text">
                    {sinopse}
                </p>
            </div>

        </div>


    );
}

