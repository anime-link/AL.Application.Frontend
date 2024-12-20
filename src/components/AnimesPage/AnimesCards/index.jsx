import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const AnimeCards = ({ nome, imgAnime }) => {
  const navigate = useNavigate();

  // Redireciona para a página de gênero específico
  const handleGenreClick = () => {
    navigate(`/animes/${nome.toLowerCase()}`);
  };

  return (
    <div
      className="anime-card"
      style={{ backgroundImage: `url(${imgAnime})` }}
      onClick={handleGenreClick}
    >
      <h2 className="anime-title">{nome}</h2>
    </div>
  );
};

export default AnimeCards;
