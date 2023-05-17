import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid"
export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push({ "id": uuid(), "title": action.payload, "complated": false })
        },
        toggle: (state, action) => {
            console.log(action.payload)
            const target = state.items.find(item => item.id == action.payload)
            target.complated = !target.complated
        },
        deleteTodo: (state, action) => {
            const target = state.items.find(item => item.id == action.payload)
            const indexOfTarget = state.items.indexOf(target)
            state.items.splice(indexOfTarget, 1)
        }
    }
})
export const { addTodo, toggle, deleteTodo } = todosSlice.actions
export default todosSlice.reducer