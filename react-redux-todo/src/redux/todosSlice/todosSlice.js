import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid"
export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        activeItems: [],
        complatedItems: [],
        activeTab: "All"
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push({ id: uuid(), title: action.payload, isComplated: false })
        },
        toggle: (state, action) => {
            const target = state.items.find(item => item.id == action.payload)
            target.isComplated = !target.isComplated
        },
        deleteTodo: (state, action) => {
            const target = state.items.find(item => item.id == action.payload)
            const indexOfTarget = state.items.indexOf(target)
            state.items.splice(indexOfTarget, 1)
        },
        clearComplated: (state) => {
            state.items = state.items.filter(item => item.isComplated === false)
        },
        changeActiveFilter: (state, action) => {
            state.activeTab = action.payload
        },
        activeItems: (state) => {
            if (state.activeTab == "all") {
                state.items = state.items
            }
            else if (state.activeTab == "active") {
                state.items = state.items.filter(item => item.isComplated == true)
            }
            else {
                state.items = state.items.filter(item => item.isComplated == false)
            }
        }
    }
})
export const { addTodo, toggle, deleteTodo, clearComplated, changeActiveFilter, activeItems } = todosSlice.actions
export default todosSlice.reducer