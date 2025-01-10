import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    destinationList : [
        {
            name : "Kashmir",
            days  : 7,
            fact : "Heaven on earth"
        },
        {
            name : "Jaipur",
            days  : 7,
            fact : "Pink City"
        },
        {
            name : "Kanpur",
            days  : 7,
            fact : "Orange City"
        }
    ],
    destinationSelected : undefined
}
export const detinationSlice = createSlice({
    name : "destination",
    initialState : initialState,
    reducers : {
           destinatonClicked : (state,action) => {
                  state.destinationSelected = action.payload
                  console.log(state.destinationSelected)
           },
           resetDestination : (state,action) => {
            console.log(action)
            state.destinationSelected = undefined
           }
    }
})
export const {destinatonClicked,resetDestination} = detinationSlice.actions;
export const destinationReducer = detinationSlice.reducer;
