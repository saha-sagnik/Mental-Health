import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
    name:'cart',
    initialState:{
        info:[],
        loggedIn:false,
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
        },
        addUser:(state,action)=>{
            state.user = action.payload ;
            state.loggedIn = true;
        },
        removeUser:(state,action)=>{
            state.user = null;
            state.loggedIn = false;
        }
    }
});

export const {addItem,setItem,cleatCart,addUser,removeUser} = infoSlice.actions;

export default infoSlice.reducer;