import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
    name:'cart',
    initialState:{
        info:[],
        loggedIn:false
    },
    reducers: {
        addItem: (state,action)=>{
            state.info.push(action.payload);
        },
        cleatCart:(state,action)=>{
            state.info = [];
        }
    }
});

export const {addItem,cleatCart} = infoSlice.actions;

export default infoSlice.reducer;