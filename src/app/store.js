import { configureStore } from "@reduxjs/toolkit";
import  markdownReducers  from "../features/markdawn/markdownSlice";

export const store = configureStore({
    reducer:{
        mark: markdownReducers
    }
})