import React from "react";
import "./styles.css";
import ComunidadesArea from "../../components/Communities";

import { useEffect } from "react";

import { useUser } from "../../services/UserContext";

export default function Comunidades() {

    const { user } = useUser();

    useEffect(() => {

        if(user) {
            console.log(user)
        }
    });
    
    return (
        <div className="comunidades-area">
            <ComunidadesArea />
        </div>
    );
}