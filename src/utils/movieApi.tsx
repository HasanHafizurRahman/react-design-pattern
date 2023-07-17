import { MovieTypes } from "../types/Movietypes";

const fetchMovies = async (): Promise<MovieTypes[]> => {
  const response: Response = await fetch(
    "https://json-faker.onrender.com/movies"
  );
  const data: MovieTypes[] = (await response.json()) as MovieTypes[];
  return data;
};

export default fetchMovies;
