import React, { useState } from "react";
import "./ToDoForm.scss";
import { IoMdAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slices/todolist";

function ToDoForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleAddTask = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <>
      <form className="todo__form" onSubmit={handleAddTask}>
        <div className="todo__task">
          <input
            className="todo__input"
            type="text"
            placeholder="Ajouant des tâches!"
            onChange={handleInputChange}
            value={text}
          ></input>
          <button type="submit" className="btn btn-primary">
            <IoMdAdd />
          </button>
        </div>
      </form>
    </>
  );
}

export default ToDoForm;
