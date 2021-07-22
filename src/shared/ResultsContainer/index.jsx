import React from "react";
import Result from "./Result";
import "./ResultsContainer.css";

const ResultsContainer = ({ searchInput, data, total }) => (
  <div className="ResultsContainer">
    {searchInput?.length > 0 && (
      <p>
        {" "}
        total results for {searchInput}: {total}
      </p>
    )}
    <div className="ResultsContainer__results">
      {/* I used forEach mistakenly, 
      it should be maps since 
      forEach does not return anything */}
      {data.map(({ mid, thumbnail, title, year }) => {
        if (title) {
          return (
            <div key={mid}>
              <Result thumbnail={thumbnail} title={title} year={year} />
            </div>
          );
        }
      })}
    </div>
  </div>
);

export default ResultsContainer;
