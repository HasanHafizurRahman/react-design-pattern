import React, { useEffect, useState } from "react";
import { MovieTypes } from "../types/Movietypes";
import Loading from "../Loading";

interface IWithFetchProps {
  data: MovieTypes[]; // Renamed 'data' to 'data'
}

const withFetch = (
  WrappedComponent: React.ComponentType<IWithFetchProps>,
  fetchData: () => Promise<MovieTypes[]>
) => {
  return () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<MovieTypes[]>([]); // Renamed 'data' to 'data'

    useEffect(() => {
      const fetchDataAsync = async () => {
        const res = await fetchData();
        console.log("response data:", res);
        setData(res.movies);
        setLoading(false);
      };

      fetchDataAsync();
    }, []);

    if (loading) {
      return <Loading />;
    }

    return <WrappedComponent data={data} />;
  };
};

export default withFetch;
