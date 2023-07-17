import React, { useEffect, useState } from "react";

const withFetch = (WrappedComponent, fetchData) => {
  return (props) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchDataAsync = async () => {
        const res = await fetchData();
        console.log("response data:", res);
        setData(res.movies); //this res return an Array of objects named movies
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
