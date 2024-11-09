import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function CardTerror({ cardImgTerror, title, sinopse, handleAnimePage }) {
    return (
        <div className="container-card">
            <div className="card-anime-terror"
                style={{ backgroundImage: `url(${cardImgTerror})` }}
                onClick={handleAnimePage}
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

