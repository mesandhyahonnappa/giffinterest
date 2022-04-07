const API_KEY = `2pUceOGw7GaGoBmA1nb0dwNLDUEITSRy`;

const SEARCH_GIFFY_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

// TODO: Memoize this function
export const fetchGiffies = async (searchTerm = "", offset = 0, limit = 10) => {
  if (searchTerm === "") return [];
  console.log({ searchTerm, offset, limit });
  let url = `${SEARCH_GIFFY_URL}&q=${searchTerm}&limit=${limit}&offset=${offset}`;

  const response = await fetch(url);
  const result = await response.json();
  const giffies = result.data;
  return giffies;
};

//https://api.giphy.com/v1/gifs/search?api_key=2pUceOGw7GaGoBmA1nb0dwNLDUEITSRy&q=happy&limit=15&offset=15
