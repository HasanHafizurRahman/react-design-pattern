/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import Table from "../reusable-components/Table";

const TableView = ({ data }) => {
  console.log("Data in TableView:", data);
  const tableHeaders = ["Title", "Director", "Year"];
  const tableRow = data.map((res) => [res.title, res.director, res.year]);

  return (
    <div>
      <h1>Table View</h1>
      {data.length > 0 ? (
        <Table headers={tableHeaders} rows={tableRow} />
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
};

export default TableView;
