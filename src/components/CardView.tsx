import React from "react";
import Card from "../reusable-components/Card";

const CardView = ({ data }) => {
  return (
    <div>
      <h1>Card View</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center px-10 gap-8">
        {data.slice(1, 7).map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default CardView;
