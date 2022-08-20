import React from "react";
import { useState, useEffect } from "react";

// handles the search results and processes the data for display, limits number of visible result
// results are displayed very rudimentarily, could increase amount of data displayed and incorporate paging etc...
const Results = (props) => {
  const results = props.results;
  const [shortResults, setShortResults] = useState([]);



  let i = 0;
    return (
      <div>
        <h1>Results</h1>
      </div>
    );
  
};

export default Results;
