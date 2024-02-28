import { createSlice } from "@reduxjs/toolkit";

const initialNotes = JSON.parse(localStorage.getItem("notes")) || [];
const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notes: initialNotes,
    },
    reducers: {
        addNote: (state, action) => {
            const newNote = {
                id: Date.now(),
                text: action.payload,
            };
            state.notes.push(newNote);
            localStorage.setItem("notes", JSON.stringify(state.notes));
        },
        editNote: (state, action) => {
            const { id } = action.payload;
            const note = state.notes.find(todo => todo.id === id);
            if (note) {
                note.text = action.payload;
                localStorage.setItem("notes", JSON.stringify(state.notes));
            }
        },
        deleteNote: (state, action) => {
            const { id } = action.payload;
            state.notes = state.notes.filter(todo => todo.id !== id);
            localStorage.setItem("notes", JSON.stringify(state.notes));
        }

    },
});

export const { addNote, editNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;