import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import useMovieData from "./useMovieData";

const Parent = () => {
  const movies = useMovieData();
  return (
    <div className="App">
      <h1>Movie Listing Site</h1>
      <div className="card-view">
        <h2>Cards View</h2>
        <div className="card-container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>

      <div className="list-view">
        <h2>List View</h2>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default Parent;
