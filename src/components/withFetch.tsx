import React, { useEffect, useState } from "react";

const withFetch = (WrappedComponent, fetchData) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchDataAsync = async () => {
        const res = await fetchData();
        setData(res.movies);
        setLoading(false);
      };

      fetchDataAsync();
    }, []);

    if (loading) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent data={data} {...props} />;
  };
};

export default withFetch;
