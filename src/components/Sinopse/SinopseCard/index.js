import React from "react";
import './styles.css';

export default function SinopseCard({ ImgSin, ImgBack, title, synopsis, year, episodes, rating, status, genres }) {
  return (
    <div style={{ backgroundImage: `url(${ImgBack})` }} className="space-card">
      <div className="sinopse-card">
        <div className="container-content">
          <div className="anime-plot">
            <p className="text-plot">
              {synopsis}
            </p>
          </div>
          <div className="space-content">
          <img className="imgSin" src={ImgSin} alt={`${title} Poster`} />
          <div className="anime-attribute">
            <h3 className="tittle">{title}</h3>
            <p className="ano">{year}</p>
            <p className="episodes">Episodios: {episodes}</p>
            <p className="classification">Gêneros: {genres}</p>
            <p className="status">Status: {status}</p>
            <p className="nota">Nota: {rating}</p>
          </div>
          </div>
        </div>          
      </div>
       
    </div>
                    
  );
}
