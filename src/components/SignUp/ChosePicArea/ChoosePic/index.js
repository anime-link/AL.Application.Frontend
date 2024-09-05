import React, { useState } from "react";
import "./styles.css";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

import blueLock from "../../../../assets/Images/ProfilePics/blue-lock-pic.png";
import bnha from "../../../../assets/Images/ProfilePics/bnha-pic.png";
import chainsaw from "../../../../assets/Images/ProfilePics/chainsaw-man-pic.png";
import classroom from "../../../../assets/Images/ProfilePics/classroom-pic.png";
import dbz from "../../../../assets/Images/ProfilePics/dbz-pic.png";
import demon from "../../../../assets/Images/ProfilePics/demon-slayer-pic.png";
import stone from "../../../../assets/Images/ProfilePics/dr-stone-pic.png";
import frieren from "../../../../assets/Images/ProfilePics/frieren-pic.png";
import goblin from "../../../../assets/Images/ProfilePics/goblin-slayer-pic.png";
import hxh from "../../../../assets/Images/ProfilePics/hxh-pic.png";
import jibaku from "../../../../assets/Images/ProfilePics/jibaku-pic.png";
import naruto from "../../../../assets/Images/ProfilePics/naruto-pic.png";
import pokemon from "../../../../assets/Images/ProfilePics/pokemon-pic.png";
import spy from "../../../../assets/Images/ProfilePics/spy-family-pic.png";
import tokyo from "../../../../assets/Images/ProfilePics/tokyo-revengers-pic.png";

export function AreaEscolhaImagem({ setImgSelecionada }) {
    // Array das imagens de perfil
    const profilePics = [
        blueLock,
        bnha,
        chainsaw,
        classroom,
        dbz,
        demon,
        stone,
        frieren,
        goblin,
        hxh,
        jibaku,
        naruto,
        pokemon,
        spy,
        tokyo
    ];

    return (
        <div className="imagem-escolha-area">
            <RiArrowLeftSLine className="imagem-escolha-antes" />
    
            <RiArrowRightSLine className="imagem-escolha-depois" />
        </div>
    );
}