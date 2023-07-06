import  { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./Todo"
export const store=configureStore({
    reducer:{
        todo:todoReducer

    }
})