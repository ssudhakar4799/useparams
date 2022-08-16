
import { configureStore } from "@reduxjs/toolkit";
import slices from "./slices";

export default configureStore({
    reducer:{
        cart:slices,
        fav:slices
    }
})