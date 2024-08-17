
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
    title: string;
}

// Define the initial state using that type
const initialState: CounterState = {
  title: '',
};

const cardSlice = createSlice({
  name: "cardslice",
  initialState: initialState,
  reducers: {
    sercheableField: (state,actions) => {
      state.title = actions.payload ;
    },
  },
});

export const {  sercheableField } = cardSlice.actions;
export default cardSlice.reducer;
