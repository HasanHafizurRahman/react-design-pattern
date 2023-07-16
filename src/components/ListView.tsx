import React from "react";

const ListView = ({ data }) => {
  //   console.log("Data in ListView:", data);
  return (
    <div>
      <h1>List View</h1>
      {
        <ul>
          {data.map((movie) => (
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

export default ListView;
