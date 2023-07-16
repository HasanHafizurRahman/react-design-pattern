import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="max-w-sm text-center bg-white border border-gray-200 rounded-lg shadow py-2">
      <img
        className="rounded-t-lg mx-auto w-60 h-40"
        src={movie.poster}
        alt=""
      />
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        Title: {movie.title}
      </h3>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Director: {movie.director}
      </p>
    </div>
  );
};

export default Card;
