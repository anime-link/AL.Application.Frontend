import React from "react";
import './styles.css';
import imgVolte from "../../../assets/Images/Sinopse/imgVolte.png"

export default function SinopseCommit() {
  return (
    <div style={{ backgroundImage: `url(${imgVolte})` }} className="sinopse-volte" >

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