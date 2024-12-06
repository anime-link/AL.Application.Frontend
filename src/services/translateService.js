import axios from 'axios';

// Substitua pela chave de API do Google Cloud
const API_KEY = '';

export const translateText = async (text, targetLanguage = 'pt') => {
  try {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    
    const response = await axios.post(url, {
      q: text,               // Texto a ser traduzido
      target: targetLanguage, // Idioma de destino ('pt' para português)
      format: 'text'         // Formato do texto
    });

    const translatedText = response.data.data.translations[0].translatedText;
    return translatedText;
  } catch (error) {
    console.error("Erro ao traduzir o texto:", error);
    return text;  // Se houver erro, retorna o texto original
  }
};
