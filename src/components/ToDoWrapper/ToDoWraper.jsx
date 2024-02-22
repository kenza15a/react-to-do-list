import React, { useState } from "react";
import "./ToDoWrapper.scss";
import ToDoForm from "../ToDoForm/ToDoForm";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleComplete,
  setFilter,
  setSearchQuery,
} from "../../redux/slices/todolist";
import { FaCheck } from "react-icons/fa";
import { RiListCheck3 } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import SearchForm from "../SearcheForm/SearchForm";
import Filters from "../Filters/Filters";

function ToDoWrapper() {
  const dispatch = useDispatch();
  const tasksList = useSelector((state) => state.todos.tasks);
  const filter = useSelector((state) => state.todos.filter);
  const searchQuery = useSelector((state) => state.todos.searchQuery);

  // Filter tasks based on filter state
  let displayedTasks = tasksList;
  if (filter === "completed") {
    displayedTasks = tasksList.filter((task) => task.completed);
  } else if (filter === "incomplete") {
    displayedTasks = tasksList.filter((task) => !task.completed);
  }

  // Filter tasks based on search query
  if (searchQuery) {
    displayedTasks = displayedTasks.filter((task) =>
      task.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete({ id }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  const handleSearchChange = (query) => {
    dispatch(setSearchQuery(query));
  };

  return (
    <>
      <div className="todo__wrapper">
        <div className="todo__options">
          <Filters onFilterChange={handleFilterChange} />
          <SearchForm onSearchChange={handleSearchChange} />
        </div>

        <div className="todo__tasks">
          {displayedTasks.length > 0 ? (
            <ul>
              {displayedTasks.map((todo) => (
                <li
                  key={todo.id}
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                  className="one__task"
                >
                  <p className="todo_text">{todo.text} </p>
                  <div className="crud">
                    <button
                      className={
                        !todo.completed ? "btn complete" : "btn incomplete"
                      }
                      onClick={() => handleToggleComplete(todo.id)}
                    >
                      {todo.completed ? <RiListCheck3 /> : <FaCheck />}
                    </button>
                    <button
                      className="btn delete"
                      onClick={() => handleDeleteTodo(todo.id)}
                    >
                      <MdDeleteOutline />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="todo_initial__message">Aucune tache trouvée!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ToDoWrapper;
