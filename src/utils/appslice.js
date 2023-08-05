import {createSlice} from "@reduxjs/toolkit";
const appslice=createSlice({
    name:"app",
    initialState:{
        ismenuopen:true
    } ,
    reducers:{
        toggleMenu:(state)=>{
            state.ismenuopen=!state.ismenuopen
        }
    }
})
export const {toggleMenu}=appslice.actions;
export default appslice.reducer;