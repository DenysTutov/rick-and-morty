import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';
const allCharacters = [];

export const getCharactersByPage = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}/character/?page=${page}`);

  return response.data;
};

export const getAllCharacters = async () => {
  const response = await getCharactersByPage();

  const totalPages = response.info.pages;

  allCharacters.push(...response.results);

  const fetches = [];

  for (let i = 2; i <= totalPages; i += 1) {
    fetches.push(getCharactersByPage(i));
  }

  const data = await Promise.all(fetches);
  data.forEach(item => allCharacters.push(...item.results));

  return allCharacters;
};
