import { createSlice } from "@reduxjs/toolkit";

const ResultSlice = createSlice({
    name:"result",
    initialState:{
        resultInfo:[]
    },
    reducers:{
        addResult:(state,action)=>{
            state.resultInfo = (action.payload);
        }
    }
})

export const {addResult} = ResultSlice.actions;

export default ResultSlice.reducer ;