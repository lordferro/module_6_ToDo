import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    { id: 0, text: 'Learn HTML and CSS', completed: true },
    { id: 1, text: 'Get good at JavaScript', completed: true },
    { id: 2, text: 'Master React', completed: false },
    { id: 3, text: 'Discover Redux', completed: false },
    { id: 4, text: 'Build amazing apps', completed: false },
  ],
  filters: {
    status: 'all',
  },
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action) => {state.tasks.push(action.payload)}
    }
})

console.log(todoSlice)

export const {add} = todoSlice.actions
export default todoSlice.reducer