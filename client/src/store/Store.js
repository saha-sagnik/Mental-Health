import { configureStore } from "@reduxjs/toolkit";
import InfoSlice from "./InfoSlice";

const Store = configureStore(
    {
        reducer:{
            info:InfoSlice
        }
    }
)

export default Store;