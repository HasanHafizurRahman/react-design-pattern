import CardView from "./HOC-components/CardView";
import withFetch from "./HOC-components/withFetch";
import ListView from "./HOC-components/ListView";
import fetchMovies from "./utils/movieApi";
import TableView from "./HOC-components/TableView";
import Person1 from "./hoc-2/Person1";
import Person2 from "./hoc-2/Person2";
import Parent from "./hooks-pattern/Parent";

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

      {/* HOC 2 */}
      <div className="py-5 px-10">
        <h1 className="text-primary text-h1 font-semibold text-center">
          Salary Incrementer
        </h1>
        <div className="flex justify-center">
          <Person1 />
          <Person2 />
        </div>
      </div>

      {/* Hook Pattern  */}
      {/* <Parent /> */}
    </div>
  );
}

export default App;
