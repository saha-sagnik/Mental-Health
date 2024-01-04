import { configureStore } from "@reduxjs/toolkit";
import InfoSlice from "./InfoSlice";

const Store = configureStore(
    {
        reducer:{
            cart:InfoSlice
        }
    }
)

export default Store;