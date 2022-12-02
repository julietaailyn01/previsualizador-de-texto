import { createSlice } from "@reduxjs/toolkit";

const initialState= "iniciar el estado"

export const markdownSlice = createSlice({
    name:"mdown",
    initialState,
    reducers:{
        

    }
})

export const {addText} = markdownSlice.actions 

export default markdownSlice.reducer