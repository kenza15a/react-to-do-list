import { createSlice } from "@reduxjs/toolkit";
const tasksInitialState = JSON.parse(localStorage.getItem("tasks")) || [];
const todoListeSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: tasksInitialState,
    filter: 'all', //degfault filter
    filteredTasks: [], //tasks after search
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
      const filteredTask = state.filteredTasks.find(todo => todo.id === id);
      if (filteredTask) {
        filteredTask.completed = !filteredTask.completed;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.tasks = state.tasks.filter(todo => todo.id !== id);
      state.filteredTasks = state.filteredTasks.filter(todo => todo.id !== id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    setFilter(state, action) {
      state.filter = action.payload;
    
      if (action.payload === 'completed') {
        state.filteredTasks = state.tasks.filter(todo => todo.completed);
      } else if (action.payload === 'incomplete') {
        state.filteredTasks = state.tasks.filter(todo => !todo.completed);
      } else {
        state.filteredTasks = state.tasks;
      }
    },
    makeSearch(state, action) {

      state.filteredTasks = state.tasks.filter(todo => todo.text.toLowerCase().includes(action.payload.toLowerCase())); //error here
    }
  },
});
export const { addTodo, toggleComplete, deleteTodo, setFilter, makeSearch } = todoListeSlice.actions;
export default todoListeSlice.reducer;