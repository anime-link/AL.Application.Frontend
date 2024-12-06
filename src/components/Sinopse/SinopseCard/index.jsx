import React from "react";
import "./styles.css";
import { RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { RiArrowLeftCircleFill } from "react-icons/ri";

export default function SinopseCard({
  ImgSin,
  ImgBack,
  title,
  synopsis,
  year,
  episodes,
  rating,
  status,
  genres,
}) {
  return (
    <div style={{ backgroundImage: `url(${ImgBack})` }} className="space-card">
      <div className="container-content">
        <div className="anime-plot">
          <div className="sinopse-icone-voltar">
            <Link className="sinopse-icone-link" to={"/animes"}>
              <RiArrowLeftCircleFill
                className="sinopse-icone-fechar"
                alt="Fechar"
              />
            </Link>
          </div>
          <h3 className="tittle">{title}</h3>
          <p className="ano">{year}</p>
          <p className="text-plot">{synopsis}</p>
        </div>

        <div className="space-content">
          <img className="imgSin" src={ImgSin} alt={`${title} Poster`} />
          <div className="anime-atribute-box">
            <div className="anime-atribute">
              <p className="episodes">Episodios: {episodes}</p>
              <p className="classification">Gêneros: {`${genres}`}</p>
              <p className="status">Status: {status}</p>
            </div>
            <div className="anime-point">
              <p className="nota">
                {" "}
                <RiStarFill className="star" /> {rating}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
