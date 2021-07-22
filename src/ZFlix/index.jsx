import React, { useState, useEffect, useQuery } from "react";
// I would use the MovieQuery I created to call the API
// import MovieQuery from '../queries/MovieQuery.graphl'
import SearchBar from "../shared/SearchBar";
import ResultsContainer from "../shared/ResultsContainer";
import "./ZFlix.css";

const ZFlix = ({ movieData: { data } }) => {
  /* State is initialized with an empty array so that when you first visit the site 
    there is just the screen bar
  */
  const [movieResults, filterMovieResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const handleSubmit = () => {
      let filteredResults = data;
      if (searchInput.length > 0) {
        /* This is only because we dont have a query, 
           I would change this entirely to use a graph api query instead.
        */

        filteredResults = data.filter((movie) =>
          movie.title.toLowerCase().includes(searchInput)
        );
      }
      /*  this is a smell: would write a proper filter 
          but figured backend would handle it */
      filteredResults = filteredResults.length > 0 ? filteredResults : data;
      return filterMovieResults(filteredResults);

      // Below is the query I would use to call the API
      // const { loading, error, data } = useQuery(MovieQuery, variables: { searchInput });
    };

    if (submit) {
      handleSubmit();
      setSubmit(false);
    }
  }, [submit]);

  return (
    <div>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        label={"Search a movie"}
        onSubmitFn={setSubmit}
      />
      <div>
        <ResultsContainer data={movieResults} total={movieResults.length} />
      </div>
    </div>
  );
};

export default ZFlix;
