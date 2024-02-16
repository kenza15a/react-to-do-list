import React from "react";
import "./ToDoWrapper.scss";
import ToDoForm from "../ToDoForm/ToDoForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleComplete } from "../../redux/slices/todolist";
import { FaCheck } from "react-icons/fa";
import { RiListCheck3 } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";

function ToDoWraper() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <div className="todo__wrapper">
        <div className="todo__tasks">
          <ToDoForm />

          <ul>
            {todos.map((todo) => (
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
        </div>
      </div>
    </>
  );
}

export default ToDoWraper;
