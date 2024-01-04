import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
    name:'cart',
    initialState:{
        info:[],
        loggedIn:false
    },
    reducers: {
        addItem: (state,action)=>{
            state.info = (action.payload);
        },
        cleatCart:(state,action)=>{
            state.info = [];
        }
    }
});

export const {addItem,cleatCart} = cartSlice.actions;

export default infoSlice.reducer;