
import { createSlice } from "@reduxjs/toolkit";

export const Slices=createSlice({
    name:"cart",
    initialState:{
        cart:[],
        fav:[]
    },
    reducers:{
        addcart:(state,action)=>{
            state.cart=action.payload;
            
        },
        favorite:(state,action)=>{
            state.fav=action.payload
        }
    }
})
export const {addcart,favorite}=Slices.actions;
export default Slices.reducer;