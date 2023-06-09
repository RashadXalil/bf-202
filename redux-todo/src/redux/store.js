import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todoSlide/todosSlice";

export const store = configureStore({
    reducer: {
        todos:todosSlice
    }
})