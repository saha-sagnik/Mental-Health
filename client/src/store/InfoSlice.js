import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
    name:'cart',
    initialState:{
        info:[],
        loggedIn:true,
        name:"",
        token:"",
        user:null,
        userInfo:null
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
        setName:(state,action)=>{
            state.name=action.payload;
        },
        setToken:(state,action)=>{
            state.name=action.payload ;
        },
        setUserInfo:(state,action)=>{
            state.name = action.payload
        }
    }
});

export const {addItem,setItem,cleatCart,setName,setToken,setUserInfo} = infoSlice.actions;

export default infoSlice.reducer;