import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todosSlice/todosSlice";

export const store = configureStore({
    reducer: {
        todos: todosSlice
    }
})
