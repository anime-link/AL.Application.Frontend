import React from "react";
import './styles.css';
import Header from '../Header';
import SinopseCard from './SinopseCard';
import SinopseIndication from "./SinopseIndication";

import image72 from "../../assets/Images/Sinopse/image 72.png";

import image75 from '../../assets/Images/AnimeLaunch/image 75.png';




export default function SinopseArea() {
  return (
    <div className="sinopse-area">
      <Header/>
      <SinopseCard ImgSin={image75}/>
      <SinopseIndication prop={image72} />
    </div>
  );

}