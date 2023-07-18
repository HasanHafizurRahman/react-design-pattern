import { MovieTypes } from "../types/Movietypes";

interface ListViewProps {
  data: MovieTypes[];
}

const MovieList = ({ data }: ListViewProps) => {
  //   console.log("Data in ListViewProps:", data);
  return (
    <div>
      <h1>List View</h1>
      {
        <ul>
          {data.map((movie: MovieTypes) => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <p>Director: {movie.director}</p>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default MovieList;
