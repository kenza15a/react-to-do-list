import React from 'react'


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
                <select onChange={handleFilterChange} >
                  <option value="all">Toutes</option>
                  <option value="completed">Faites</option>
                  <option value="incomplete">A Faire </option>
                </select>
              </label>
            </div></>
  )
}

export default Filters
