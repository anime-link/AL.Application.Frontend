import React from "react";
import "./styles.css";
import community1 from "../../../assets/Images/Communities/community1.png";
import community2 from "../../../assets/Images/Communities/community2.png";
import community3 from "../../../assets/Images/Communities/community3.png";
import ComunidadeSlider from "../CommunitySlider";

export default function ComunidadesPopular() {
    const communityPics = [
        community1,
        community2,
        community3
    ];

    return (
        <div className="comunidade-popular-area">
            <h1 className="comunidade-popular-titulo">Populares</h1>
            <ComunidadeSlider images={communityPics} />
        </div>
    );
}