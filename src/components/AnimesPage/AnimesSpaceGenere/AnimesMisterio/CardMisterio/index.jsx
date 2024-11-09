import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function CardMisterio({ cardImgMisterio, title, sinopse, handleAnimePage }) {
    return (
        <div className="container-card">
            <div className="card-anime-misterio"
                style={{ backgroundImage: `url(${cardImgMisterio})` }}
                onClick={handleAnimePage}
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

