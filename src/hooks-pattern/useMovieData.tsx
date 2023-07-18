import { useState, useEffect } from "react";

const useMovieData = () => {
  const [movies, setMovies] = useState([]);
  const API_URL = "https://json-faker.onrender.com/movies";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return movies;
};

export default useMovieData;
