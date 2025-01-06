import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    destinationList : [
        {
            name : "Kashmir",
            days  : 7,
            Fact : ""
        },
        {
            name : "Kashmir",
            days  : 7,
            Fact : ""
        },
        {
            name : "Kashmir",
            days  : 7,
            Fact : ""
        }
    ]
}
export const detinationSlice = createSlice({
    name : "destination",
    initialState : initialState,
    reducers : {

    }
})

export const destinationReducer = detinationSlice.reducer;