import React from "react";
import './styles.css';
import imgVolte from "../../../assets/Images/Sinopse/imgVolte.png";

import { RiThumbUpFill } from "react-icons/ri";
import { RiThumbDownFill } from "react-icons/ri";



export default function SinopseCommit() {
  return (
    <div style={{ backgroundImage: `url(${imgVolte})` }} className="sinopse-volte" >

      <div className="content-volte">
        <p className="title-vote">AVALIE AQUI</p>
        <div className="volte-like">
          <button>
            <RiThumbUpFill className="likeUp"/>
            <p>1000k</p>
          </button>
          <button>
            <RiThumbDownFill className="likeDown"/>
            <p>1000k</p>
          </button>
        </div>
      </div>
     
    </div>
  );

}