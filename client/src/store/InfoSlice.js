import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
    name:'cart',
    initialState:{
        info:[],
        loggedIn:true,
        user:null
    },
    reducers: {
        addItem: (state,action)=>{
            state.info.push(action.payload);
        },
        cleatCart:(state,action)=>{
            state.info = [];
        },
        setItem:(state,action)=>{
            state.info = action.payload;
        }
    }
});

export const {addItem,setItem,cleatCart} = infoSlice.actions;

export default infoSlice.reducer;