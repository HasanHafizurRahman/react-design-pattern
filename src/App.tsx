import CardView from "./HOC-components/CardView";
import withFetch from "./HOC-components/withFetch";
import ListView from "./HOC-components/ListView";
import fetchMovies from "./utils/movieApi";
import TableView from "./HOC-components/TableView";

function App() {
  // HOC
  const CardViewWithFetch = withFetch(CardView, fetchMovies);
  const ListViewWithFetch = withFetch(ListView, fetchMovies);
  const TableViewWithFetch = withFetch(TableView, fetchMovies);

  return (
    <div>
      {/* HOC  */}
      <CardViewWithFetch />
      <ListViewWithFetch />
      <TableViewWithFetch />
    </div>
  );
}

export default App;
