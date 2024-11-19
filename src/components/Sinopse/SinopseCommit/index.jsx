import React from "react";
import './styles.css';
import image208 from "../../../assets/Images/Sinopse/image 208.png";

export default function SinopseCommit() {
  return (
    <div className="sinopse-volte"
        style={{ backgroundImage: `url(${image208})` }}
    >
      <div className="content-volte">
        <p className="tittle-volte">AVALIE AQUI</p>
        <div className="volte">
          <button></button>
          <button></button>
        </div>
      </div>
     
    </div>
  );

}