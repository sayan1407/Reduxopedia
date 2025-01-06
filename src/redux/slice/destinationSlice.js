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
    ],
    destinationSelected : null
}
export const detinationSlice = createSlice({
    name : "destination",
    initialState : initialState,
    reducers : {
           destinatonClicked : (state,action) => {
                  state.destinationSelected = action.payload
                  console.log(state.destinationSelected)
           }
    }
})
export const {destinatonClicked} = detinationSlice.actions;
export const destinationReducer = detinationSlice.reducer;
