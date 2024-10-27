import React, { useEffect, useState } from "react";
import './styles.css';
import Header from '../Header';
import SinopseCard from './SinopseCard';
import SinopseIndication from "./SinopseIndication";
import SinopseCommit from "./SinopseCommit";
import Footer from "../Footer";
import { getJikanAnimeDetails } from "../../services/AnimeAPI/AnimeApi";
import { translateText } from '../../services/translateService'; // Importa o serviço de tradução
import { useParams } from "react-router-dom";

import user from '../../assets/Images/Sinopse/user.png'

export default function SinopseArea() {
  const { id } = useParams(); 
  const [animeData, setAnimeData] = useState(null);
  const [translatedSynopsis, setTranslatedSynopsis] = useState(''); // Estado para a sinopse traduzida

  useEffect(() => {
    const fetchAnimeData = async () => {
      if (id) {
        const data = await getJikanAnimeDetails(id);
        setAnimeData(data);

        // Traduzir a sinopse com a Cloud Translation API
        if (data && data.synopsis) {
          const translatedText = await translateText(data.synopsis); // Traduz a sinopse
          setTranslatedSynopsis(translatedText); // Armazena a sinopse traduzida
        }
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
        synopsis={translatedSynopsis || animeData.synopsis} // Usa a sinopse traduzida ou a original
        year={animeData.year}
        episodes={animeData.episodes}
        rating={animeData.rating}
        status={animeData.status}
        genres={animeData.genres}
      />
      <SinopseIndication prop={animeData.posterImage} />
      <SinopseCommit ImgPerfil={user} placeholder={"Digite seu comentário"} type={"text"}/>
      <Footer/>
    </div>
  );
}
