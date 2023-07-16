import React from "react";

const CardView = ({ data }) => {
  return (
    <div>
      <h1>Card View</h1>
      {data.map((movie) => (
        <div key={movie.id} className="card">
          <img src={movie.poster} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>Director: {movie.director}</p>
        </div>
      ))}
    </div>
  );
};

export default CardView;
