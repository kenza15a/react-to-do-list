import { createSlice } from "@reduxjs/toolkit";
const initialState = JSON.parse(localStorage.getItem("todos")) || [];
const todoListeSlice=createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
      addTodo: (state, action) => {
        const newTodo = {
          id: Date.now(),
          text: action.payload,
          completed: false,
        };
      state.push(newTodo);
        localStorage.setItem("todos", JSON.stringify(state)); 
      },
      toggleComplete: (state, action) => {
        const todo = state.find((todo) => todo.id === action.payload);
       
        if (todo) {
          todo.completed = !todo.completed;
        }
        localStorage.setItem("todos", JSON.stringify(state));
      },
      deleteTodo: (state, action) => {
         state.filter(todo => todo.id !== action.payload);
        
     // Save updated tasks list to local storage
        const index = state.findIndex((todo) => todo.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
        localStorage.setItem("todos", JSON.stringify(state)); 
      },
    },
});
export const{addTodo,toggleComplete,deleteTodo}=todoListeSlice.actions;
export default todoListeSlice.reducer;