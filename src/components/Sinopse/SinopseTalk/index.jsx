import React from "react";
import './styles.css';


export default function SinopseTalk({ImgPerfil2, UserName}) {
  return (
    <div className="sinopse-manssager">
       <div className="manssager-img">
       <img className="Perfil2" src={ImgPerfil2} alt="Imagem de perfil" />
         <p>{UserName}</p>
       </div>
       <div className="manssager-user">
        <p className="user-tittle">Comentario</p>
        <p className="user-time">4 horas atrás</p>
       </div>
    </div>
  );

}