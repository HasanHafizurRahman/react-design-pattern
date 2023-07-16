import { useState } from "react";
import CardView from "./components/CardView";
import withFetch from "./components/withFetch";
import ListView from "./components/ListView";
import fetchMovies from "./utils/movieApi";
import TableView from "./components/TableView";

function App() {
  const CardViewWithFetch = withFetch(CardView, fetchMovies);
  const ListViewWithFetch = withFetch(ListView, fetchMovies);
  const TableViewWithFetch = withFetch(TableView, fetchMovies);

  return (
    <div className="bg-gray-800 content-center">
      <CardViewWithFetch />
      <ListViewWithFetch />
      <TableViewWithFetch />
    </div>
  );
}

export default App;
