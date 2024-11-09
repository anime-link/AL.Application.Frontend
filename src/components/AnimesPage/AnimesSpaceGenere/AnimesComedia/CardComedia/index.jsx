import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function CardAComedia({ cardImgComedia, title, sinopse, handleAnimePage }) {
    return (
        <div className="container-card">
            <div className="card-anime-comedia"
                style={{ backgroundImage: `url(${cardImgComedia})` }}
                onClick={handleAnimePage}
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

