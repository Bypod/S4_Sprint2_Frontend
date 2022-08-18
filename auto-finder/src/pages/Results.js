import React from "react";
import { useState, useEffect } from "react";

const {connection} = require('../dal/mysql.dal')

let results2 = ''

// handles the search results and processes the data for display, limits number of visible result
// results are displayed very rudimentarily, could increase amount of data displayed and incorporate paging etc...
const Results = (props) => {
  return (
    <div>
      <h1>Results</h1>
        <div>
          {connection.connect()}
          {connection.query('SELECT * FROM car', function (error, results, fields) {
            if(error) throw error;
            results2 = results
            return results2
          })}
          <p>{results2}</p>
        </div>
      <br />
    </div>
  );
};

export default Results;
