import React from "react";
import './styles.css';
import { RiSendPlane2Fill } from "react-icons/ri";

import SinopseTalk from "../SinopseTalk";
import user2 from '../../../assets/Images/Sinopse/user2.png'

export default function SinopseCommit({ImgPerfil, placeholder, type}) {
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
      <SinopseTalk ImgPerfil2={user2} UserName={"Millin"}/>
      <SinopseTalk ImgPerfil2={user2} UserName={"CamilaPool"}/>
      <SinopseTalk ImgPerfil2={user2} UserName={"Wilmuru"}/>
    </div>
  );

}