/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

const fetchMovies = async () => {
  const response = await fetch("https://json-faker.onrender.com/movies");
  const data = await response.json();
  return data;
};

export default fetchMovies;
