import { createSlice } from "@reduxjs/toolkit";
const tasksInitialState = JSON.parse(localStorage.getItem("tasks")) || [];
const todoListeSlice=createSlice({
    name: "todos",
    initialState: {
        tasks:tasksInitialState,
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
        const todo = state.tasks.find((todo) => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      },
      deleteTodo: (state, action) => {
         state.tasks.filter(todo => todo.id !== action.payload);
        

        const index = state.tasks.findIndex((todo) => todo.id === action.payload);
        if (index !== -1) {
          state.tasks.splice(index, 1);
        }
        localStorage.setItem("tasks", JSON.stringify(state.tasks)); 
      },
      
    setFilter(state, action) {
        state.filter = action.payload;
      },
      makeSearch(state, action) {
      state.filteredTasks= state.tasks.filter(todo => todo.text.includes(action.payload));
      }
    },
});
export const{addTodo,toggleComplete,deleteTodo,setFilter,makeSearch}=todoListeSlice.actions;
export default todoListeSlice.reducer;