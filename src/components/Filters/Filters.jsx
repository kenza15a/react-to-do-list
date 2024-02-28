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
          <button  onClick={() => handleClick("all")}>All</button>
          <button onClick={() => handleClick("completed")}>Completed</button>
          <button onClick={() => handleClick("incomplete")}>To do</button>
        </div>
      ) : (
        <div className="todo_filters_none"></div>
      )}
    </div>
  );
}

export default Filters;
