import React, { useState } from "react";
import './styles.css';
import imageBrothers from "../../../assets/Images/Sinopse/imageBrothers.png"
import { RiFilmLine } from "react-icons/ri";
import { RiAddBoxFill } from "react-icons/ri";
import ModalImage from "../modalImage/index";



export default function SinopseIndication({ props }) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="indication-area">
      {
              isOpen && <ModalImage />
      }
      <div className="indication-container">
        <div className="content-information">
          <img src={imageBrothers}  className="explanation-img" alt="Descrição da imagem" />
          <div className="container-content-text">
            <p className="content-text">Hey Bestofrendo, vocês podem ajudar nossa comunidade adicionando ao lado, onde pode ser assistido esse anime!</p>
          </div>
        </div>         
        <div className="indication-link">
          <RiFilmLine className="icon-film"/>
          <ul>
          <button onClick={() => setIsOpen(!isOpen)}>
              <RiAddBoxFill className="icon-add"/>
          </button>
          </ul>
        </div>
      </div>
    </div>
  );
}