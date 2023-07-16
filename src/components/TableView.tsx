import React from "react";

const TableView = ({ data }) => {
  console.log("Data in TableView:", data);
  return (
    <div>
      <h1>Table View</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {data.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>{movie.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
