import './styles.css';
import { useEffect, useState } from 'react';
import { getAnimeRaking } from '../../../services/AnimeAPI/AnimeApi';
import AnimesRanking from '../AnimesRanking';

export function AnimesTemporada({ filter }) {
    const [ranking, setRanking] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carregamento

    // Diferencia a cor de acordo com a colocação
    const getColorForRank = (rank) => {
        switch (rank) {
            case 1:
                return 'var(--bright-sun)'
            case 2:
                return 'var(--fog)'
            case 3:
                return 'var(--deep-koamaru)'
            default:
                return 'var(--night-rider)'
        }
    }

    // Buscar ranking baseado no filtro
    useEffect(() => {
        let isMounted = true; // Flag que garante que o compoenente está montando quando o componente for aualizado

        const fetchRanking = async () => {
            setLoading(true);

            try {
                await new Promise(resolve => setTimeout(resolve, 1500)); // Espera um segundo antes de mostrar os animes
                const data = await getAnimeRaking(filter);
                console.log('Dados: ', data);

                /* Verifica se o dado é um Array */
                if (data && Array.isArray(data)) {
                    setRanking(data.slice(0, 5)); // Limitar para 5 animes por vez 
                } else {
                    console.log("Ranking data is undefined or not an array");
                }

            } catch (error) {
                console.log('Erro ao buscar animes para o ranking', error);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchRanking();

        // Limpa o flag se o componente for desmontado
        return () => {
            isMounted = false;
        };

    }, [filter]);


    return (
        <div className='ranking-top'>
            <h2 className='ranking-titulo'>Animes da temporada</h2>
            {loading ? ( // Carrega enquanto busca os dados
                <p>Carregando...</p>
            ) : (
                <ul className='ranking-top-area'>
                    {ranking.length > 0 ? ( // Se existir algum anime, dispõe o ranking
                        ranking.map((anime, index) => (
                            <li className='ranking-lista' key={anime.mal_id}>
                                <AnimesRanking
                                    colocacao={index + 1}
                                    rankingNome={anime.title}
                                    cor={getColorForRank(index + 1)}
                                />
                            </li>
                        ))
                    ) : (
                        <p>Nenhum anime encontrado.</p> // Se não encontrar nada, exibe esta mensagem
                    )}
                </ul>
            )}
        </div>
    );
}