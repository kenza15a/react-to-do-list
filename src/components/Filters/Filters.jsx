import React, { useState } from "react";
import { IoMdOptions } from "react-icons/io";
import "./Filter.scss";
function Filters({ onFilterChange }) {
  const handleClick = (filter) => {
    onFilterChange(filter);
  };
  const [showFilters, setShowFilters] = useState(false);
  const handleFiltersDisplay = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="filters">
      <button onClick={handleFiltersDisplay}>
        {" "}
        <IoMdOptions />
      </button>
      {showFilters ? (
        <div  className="todo__filters">
          <button  onClick={() => handleClick("all")}>Toutes</button>
          <button onClick={() => handleClick("completed")}>Faites</button>
          <button onClick={() => handleClick("incomplete")}>A Faire</button>
        </div>
      ) : (
        <div className="todo_filters_none"></div>
      )}
    </div>
  );
}

export default Filters;
