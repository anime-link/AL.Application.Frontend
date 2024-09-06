// AnimeCards.js
import React from 'react';
import './styles.css';

const AnimeCards = ({ nome, imgAnime }) => {
  return (
    <div
      className="anime-card"
      style={{ backgroundImage: `url(${imgAnime})` }}
    >
      <div className="anime-content">
        <h2 className="anime-title">{nome}</h2>
      </div>
    </div>
  );
};

export default AnimeCards;
