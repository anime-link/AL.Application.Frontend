import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function CardAcao({ cardImgAcao, title, sinopse, handleAnimePage }) {

    return (
        <div className="container-card">
            <div className="card-anime-acao"
                style={{ backgroundImage: `url(${cardImgAcao})` }}
                onClick={handleAnimePage}
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

