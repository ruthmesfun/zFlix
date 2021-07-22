import React from "react";
import "./SearchBar.css";

const SearchBar = ({ label, onSubmitFn, setSearchInput, searchInput }) => {
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSearchInput(value);
  };

  /* I purposely used handle submit to trigger the search instead of 
    onChange since it would be expensive to call the query every time 
    a user types in the search box.
  */
  const handleSubmit = (event) => {
    event.preventDefault();
    /* this smells but for the sake of time 
    used the actual function instead of a wrapper
    */
    return onSubmitFn(true);
  };

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
        <label>
          <h2 className="SearchBar__label">{label} </h2>
          <input
            type="text"
            value={searchInput}
            onChange={handleChange}
            name="movie_search"
            className="SearchBar__input"
          />
        </label>
        <input type="submit" value="Submit" className="SearchBar__submit" />
      </form>
    </div>
  );
};

export default SearchBar;
