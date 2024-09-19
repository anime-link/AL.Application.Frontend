import React from "react";
import './styles.css';



export default function SinopseCommit({ImgPerfil, placeholder, type, ImgPerfil2}) {
  return (
    <div className="sinopse-commit">
     <p className="tittle-commit">Comentarios</p>
      <div className="mensseger-commit">
        <img className="imgPerfil" src={ImgPerfil}/>
        <input
            className="text-commit"
            id="commit-label"
            placeholder={placeholder}
            type={type}
        />
      </div>
    </div>
  );

}