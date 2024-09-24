import React, { useEffect, useState } from 'react';
import { getKitsuAnimeDetails, getJikanAnimeDetails } from './AnimeApi';

const AnimeComponent = ({ animeId }) => {
  const [animeData, setAnimeData] = useState(null);
  const [source, setSource] = useState('kitsu'); // Alterna entre 'kitsu' e 'jikan'

  useEffect(() => {
    const fetchData = async () => {
      let data;
      if (source === 'kitsu') {
        data = await getKitsuAnimeDetails(animeId);
      } else {
        data = await getJikanAnimeDetails(animeId);
      }
      setAnimeData(data);
    };

    fetchData();
  }, [animeId, source]);

  if (!animeData) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{animeData.title}</h1>
      <img src={animeData.posterImage} alt={`${animeData.title} Poster`} />
      {animeData.coverImage && <img src={animeData.coverImage} alt={`${animeData.title} Capa`} />}
      <p>{animeData.synopsis}</p>
      <p>Rating: {animeData.rating}</p>
      <p>Gêneros: {animeData.genres.join(', ')}</p>
      <button onClick={() => setSource('kitsu')}>Kitsu</button>
      <button onClick={() => setSource('jikan')}>Jikan</button>
    </div>
  );
};

export default AnimeComponent;
