import React, { useEffect, useState } from "react";
import './styles.css';
import Header from '../Header';
import SinopseCard from './SinopseCard';
import SinopseIndication from "./SinopseIndication";
import SinopseCommit from "./SinopseCommit";
import Footer from "../Footer";
import { getJikanAnimeDetails } from "../../services/AnimeAPI/AnimeApi";
import { useParams } from "react-router-dom";

import user from '../../assets/Images/Sinopse/user.png'

export default function SinopseArea() {
  // Pegar o parâmetro de ID no endereço URL
  const { id } = useParams(); 
  const [animeData, setAnimeData] = useState(null);

  useEffect(() => {
    const fetchAnimeData = async () => {
      // Obter ID do anime
      if (id) {
        const data = await getJikanAnimeDetails(id); // ID do anime que você quer buscar (por exemplo, 1 para "Cowboy Bebop")
        setAnimeData(data);
      }
    };
    fetchAnimeData();
  }, [id]);

  if (!animeData) return <p>Carregando...</p>;

  return (
    <div className="sinopse-area">
      <Header/>
      <SinopseCard 
        ImgBack={animeData.coverImage} 
        ImgSin={animeData.posterImage}
        title={animeData.title}
        synopsis={animeData.synopsis}
        year={animeData.year}
        episodes={animeData.episodes}
        rating={animeData.rating}
        status={animeData.status}
        genres={animeData.genres}
      />
      <SinopseIndication prop={animeData.posterImage} />
      <SinopseCommit ImgPerfil={user}  placeholder={"Digite seu comentário"} type={"text"}/>
      <Footer/>
    </div>
  );
}
