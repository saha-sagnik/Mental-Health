import { configureStore } from "@reduxjs/toolkit";
import InfoSlice from "./InfoSlice";
import ResultSlice from "./ResultSlice";

const Store = configureStore(
    {
        reducer:{
            info:InfoSlice,
            result:ResultSlice
        }
    }
)

export default Store;