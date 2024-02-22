import { createSlice } from "@reduxjs/toolkit";

const tasksInitialState = JSON.parse(localStorage.getItem("tasks")) || [];

const todoListeSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: tasksInitialState,
    filter: 'all', //default filter
    searchQuery: '', //default search query
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.tasks.push(newTodo);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleComplete: (state, action) => {
      const { id } = action.payload;
      const task = state.tasks.find(todo => todo.id === id);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.tasks = state.tasks.filter(todo => todo.id !== id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  },
});

export const { addTodo, toggleComplete, deleteTodo, setFilter, setSearchQuery } = todoListeSlice.actions;
export default todoListeSlice.reducer;