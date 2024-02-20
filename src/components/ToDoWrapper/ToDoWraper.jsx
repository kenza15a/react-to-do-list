import React from "react";
import "./ToDoWrapper.scss";
import ToDoForm from "../ToDoForm/ToDoForm";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  toggleComplete,
  setFilter,
} from "../../redux/slices/todolist";
import { FaCheck } from "react-icons/fa";
import { RiListCheck3 } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import SearchForm from "../SearcheForm/SearchForm";
import Filters from "../Filters/Filters";

function ToDoWraper() {
  const dispatch = useDispatch();
  const tasksList = useSelector((state) => {
  
    if (state.todos.filter === "completed") {
      return state.todos.tasks.filter((task) => task.completed);
    } else if (state.todos.filter === "incomplete") {
      return state.todos.tasks.filter((task) => !task.completed);
    } else {
      return state.todos.tasks;
    }
  });
  const filteredTasks = useSelector((state) => state.todos.filteredTasks); // Use filtered tasks
  const handleToggleComplete = (id) => {
    dispatch(toggleComplete({ id }));
  };
  
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }));
  };
let displayedTasks=filteredTasks.length>0? filteredTasks:tasksList;
  return (
    <>
      <div className="todo__wrapper">
      <ToDoForm />
     
        <div className="todo__tasks">
         
        
          <div className="todo__options">
          
            <Filters />
            <SearchForm />
          </div>
         
          {tasksList.length>0?
          <ul>
           {
            
            displayedTasks.map((todo) => (
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
            ))
                }
          </ul>
          :
          <p className="todo_initial__message">
          Aucune tache trouvée!
      </p>
  }
        </div>
      </div>
    </>
  );
}

export default ToDoWraper;
