import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartOpen : false,
    cart : [],
    items : [],
}
export const cartSlice = createSlice({
    name : "cart",
    initialState, //This is the initial value of the items field when the Redux store is initialized
    reducers : {
        setItems : (state, action) => {
            // state.items refers to the current value of the items field in the Redux state.
            state.items = action.payload //It is a way to pass data from an action to the corresponding reducer, allowing to update the Redux state
            //by setting state.items to action.payload, 
            // updating the items field in the Redux state with the new data from the action.
        } 
    }
})