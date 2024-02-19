import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { UseSelector,useDispatch } from "react-redux";
import { Search } from "react-router-dom";

import "./SearchForm.scss";
import {makeSearch } from "../../redux/slices/todolist";

function SearchForm() {
  const dispatch=useDispatch();
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    dispatch(makeSearch(e.target.value));
  };

  
  
  return (
    <div className="todo__search">
      <input
        className="todo__search__input"
        type="text"
        name="searchText"
        placeholder=" Trouvez votre tache"
        onInput={handleSearch}
       
      />
    
    </div>
  );
}

export default SearchForm;
