import './styles.css';
import { useEffect, useState } from 'react';
import { getAnimeRaking } from '../../../services/AnimeAPI/AnimeApi';
import AnimesRanking from '../AnimesRanking';

export function AnimesTop({ filter }) {
    const [ranking, setRanking] = useState([]);
    
    // Buscar ranking baseado no filtro
    useEffect(() => {
        const fetchRanking = async () => {
            const data = await getAnimeRaking(filter);

            /* Verifica se o dado é um Array */
            if (data && Array.isArray(data)) {
                setRanking(data.slice(0, 5)); // Limitar para 5 animes por vez 
            } else {
                console.log("Ranking data is undefined or not an array");
            }
        };
        
        fetchRanking();
    }, [filter]);

    
    return (
        <div className='ranking-top'>
            <h2 className='ranking-titulo'>Top {filter}</h2>
            <ul className='ranking-top-area'>
                {ranking.map((anime, index) => (
                    <li className='ranking-lista' key={anime.mal_id}>
                        <AnimesRanking colocacao={index + 1} rankingNome={anime.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}