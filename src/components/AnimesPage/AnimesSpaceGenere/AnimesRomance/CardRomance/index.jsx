import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function CardRomance({ cardImgRomance, title, sinopse, handleAnimePage }) {
    return (
        <div className="container-card">
            <div className="card-anime-romance"
                style={{ backgroundImage: `url(${cardImgRomance})` }}
                onClick={handleAnimePage}
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

