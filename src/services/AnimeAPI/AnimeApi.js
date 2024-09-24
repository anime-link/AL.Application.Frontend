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

  
  