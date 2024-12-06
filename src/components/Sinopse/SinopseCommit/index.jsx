import React, { useState } from "react";
import './styles.css';
import imgVolte from "../../../assets/Images/Sinopse/imgVolte.png";

import { RiThumbUpFill } from "react-icons/ri";
import { RiThumbDownFill } from "react-icons/ri";

export default function SinopseCommit() {
  // Inicializando os estados para os contadores de likes e dislikes
  const [likes, setLikes] = useState(0);  // Começando com 1000 likes
  const [dislikes, setDislikes] = useState(0);  // Começando com 1000 dislikes

  // Função para incrementar o número de likes
  const handleLike = () => {
    setLikes(likes + 1);  // Incrementa 1 no contador de likes
  };

  // Função para incrementar o número de dislikes
  const handleDislike = () => {
    setDislikes(dislikes + 1);  // Incrementa 1 no contador de dislikes
  };

  return (
    <div style={{ backgroundImage: `url(${imgVolte})` }} className="sinopse-vote">
      <div className="content-vote">
        <p className="title-vote">AVALIE AQUI</p>
        <div className="vote-like">
          <button onClick={handleLike}>
            <RiThumbUpFill className="likeUp"/>
            <p className="like-text">{likes}</p>  {/* Exibe o número de likes */}
          </button>
          <button onClick={handleDislike}>
            <RiThumbDownFill className="likeDown"/>
            <p className="like-text">{dislikes}</p>  {/* Exibe o número de dislikes */}
          </button>
        </div>
      </div>
    </div>
  );
}
