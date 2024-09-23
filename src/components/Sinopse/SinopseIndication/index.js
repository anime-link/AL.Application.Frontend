import React from "react";
import './styles.css';
import { RiVideoFill } from "react-icons/ri";


export default function SinopseIndication({prop}) {
  return (
    <div className="indication-area">
      <div className="link-card">
        <div className="text-icon">
          <RiVideoFill className="icon-play"/>
          <p>Onde assistir?</p>
        </div>
        <img className="imgApp" src={prop} alt="Imagem do App" />
      </div>
    </div>
      
  );

}