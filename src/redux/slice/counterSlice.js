import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./destinationSlice";

const initialState = {count : 10}

export const counterSlice = createSlice({
    name : "counter",
    initialState : initialState,
    reducers : {
        increment : (state) => {
            state.count += 1
        },
        decrement : (state) => {
            state.count -= 1
        },
        incrementMultiplier : (state,actions) => {
            state.count += Number(actions.payload)
        },
        decrementMultiplier : (state,actions) => {
            state.count -= Number(actions.payload)
        },
        // resetCounter : (state) => {
        //     state.count = 10
        // }
    },
    extraReducers : (builder) => {
        builder.addCase(resetDestination.toString(),(state,action) => {
            state.count = 10
        })
    }
})

export const {increment,decrement,incrementMultiplier,decrementMultiplier,resetCounter} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;