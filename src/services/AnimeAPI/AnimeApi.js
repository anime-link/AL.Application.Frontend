// API para Kitsu
export const getKitsuAnimeDetails = async (animeId) => {
  const response = await fetch(`https://kitsu.io/api/edge/anime/${animeId}`);
  const data = await response.json();

  return {
    title: data.data.attributes.titles.en_jp || data.data.attributes.titles.ja_jp,
    posterImage: data.data.attributes.posterImage?.medium,
    coverImage: data.data.attributes.coverImage?.original,
    synopsis: data.data.attributes.synopsis,
    rating: data.data.attributes.averageRating,
    genres: data.data.relationships.genres.links.related
  };
};

export const getKitsuRecentAnime = async () => {
  const response = await fetch('https://kitsu.io/api/edge/anime?filter[status]=current&page[limit]=12');
  const data = await response.json();

  return data.data.map(anime => ({
    id: anime.id,
    title: anime.attributes.titles.en_jp || anime.attributes.titles.ja_jp,
    posterImage: anime.attributes.posterImage?.medium,
    coverImage: anime.attributes.coverImage?.original,
  }));
}

// API para Jikan
export const getJikanAnimeDetails = async (animeId) => {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
  const data = await response.json();

  return {
    title: data.data.title,
    posterImage: data.data.images.jpg.image_url,
    coverImage: data.data.images.jpg.large_image_url,
    synopsis: data.data.synopsis,
    rating: data.data.score,
    genres: data.data.genres.map(genre => genre.name)
  };
};

export const getAnimeRaking = async () => {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/season/now`);

    /* Verifica se a API está funcionando */
    if (!response.ok) {
      throw new Error(`API response not ok: ${response.status}`);
    }

    const data = await response.json();
    return data.data;

  } catch (error) {
    console.error('Erro ao procurar ranking: ', error);
    return [];
  }
}

export const getKitsuAnimeRanking = async (year) => {
  const url = `https://kitsu.io/api/edge/anime?filter[seasonYear]=${year}&sort=popularityRank`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.data;

  } catch (error) {
    console.error('Erro ao procurar ranking: ', error);
    return [];
  }
}