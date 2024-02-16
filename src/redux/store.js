
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todos from './slices/todolist';

const routReducer = combineReducers({
    todos:todos,
})
const store = configureStore({
    reducer: routReducer,

})
export default store;