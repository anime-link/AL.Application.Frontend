import React from "react";
import './styles.css';

export default function SinopseCard({ ImgSin, ImgBack, title, synopsis, year, episodes, rating, status, genres }) {
  return (
    <div className="space-card">
      <div className="sinopse-img" 
        style={{ backgroundImage: `url(${ImgBack})` }}
      />
      <div className="sinopse-card">
        <img className="imgSin" src={ImgSin} alt={`${title} Poster`} />
        <div className="container-content">
          <div className="anime-attribute">
            <h3 className="tittle">{title}</h3>
            <p className="ano">{year}</p>
            <p className="episodes">Episodios: {episodes}</p>
            <p className="classification">Gêneros: {genres}</p>
            <p className="status">Status: {status}</p>
            <p className="nota">Nota: {rating}</p>
          </div>
          <div className="anime-plot">
            <p className="text-plot">
              {synopsis}
            </p>
          </div>
        </div>          
      </div>
       
    </div>
                    
  );
}
