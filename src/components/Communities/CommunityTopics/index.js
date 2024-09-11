import "./styles.css";
import community1 from "../../../assets/Images/Communities/community1.png";
import community2 from "../../../assets/Images/Communities/community2.png";
import community3 from "../../../assets/Images/Communities/community3.png";
import community4 from "../../../assets/Images/Communities/community4.png";
import community5 from "../../../assets/Images/Communities/community5.png";
import community6 from "../../../assets/Images/Communities/community6.png";
import { RiAddLine, RiFireFill, RiStarFill } from "react-icons/ri";
import ComunidadeSlider from "../CommunitySlider";

export default function ComunidadeTopicos() {
    const comunidadesPopular = [
        community1,
        community2,
        community3
    ];

    const comunidadesNovo = [
        community4,
        community5,
        community6
    ];

    return (
        <div className="comunidade-topicos-area">
            <h1 className="comunidade-topicos-titulo">Tópicos</h1>
            <div className="comunidade-topicos-pop">
                <div className="comunidade-topicos-pop-p">
                    <p className="comunidade-topicos-pop-titulo">Mais populares</p>
                    <RiStarFill className="comunidade-topicos-pop-icon" />
                </div>
                <ComunidadeSlider images={comunidadesPopular} />
            </div>
            <div className="comunidade-topicos-novo">
                <div className="comunidade-topicos-novo-p">
                    <p className="comunidade-topicos-novo-titulo">Novas comunidades</p>
                    <RiAddLine className="comunidade-topicos-novo-icon" />
                </div>
                <ComunidadeSlider images={comunidadesNovo} />
            </div>
            <div className="comunidade-topicos-alta">
                <div className="comunidade-topicos-alta-p">
                    <p className="comunidade-topicos-alta-titulo">Em alta</p>
                    <RiFireFill className="comunidade-topicos-alta-icon" />
                </div>
            </div>
        </div>
    );
}