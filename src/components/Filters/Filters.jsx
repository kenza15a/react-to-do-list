/*import React from 'react'
import './Filter.scss'

import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slices/todolist';
function Filters() {
    const dispatch=useDispatch();
   
    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value));
      };
  return (
 <>
 <div className="todo__filters">
              <label>
                <select  className="todo__filter__select" onChange={handleFilterChange} >
                  <option value="all">Toutes</option>
                  <option value="completed">Faites</option>
                  <option value="incomplete">A Faire </option>
                </select>
              </label>
            </div></>
  )
}

export default Filters
*/
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
      {
     showFilters ?
      <div className= "todo__filters">
      <button onClick={() => handleClick("all")}>Toutes</button>
      <button onClick={() => handleClick("completed")}>Faites</button>
      <button onClick={() => handleClick("incomplete")}>A Faire</button>
    </div>:
    <div className="todo_filters_none"></div>
     }
   </div>
  );
}

export default Filters;
