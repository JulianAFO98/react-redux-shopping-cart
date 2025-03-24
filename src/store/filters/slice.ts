import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    price: 0,
};


const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        changeFilters: (state, action: PayloadAction<{ price: number }>) => {
            state.price = action.payload.price;
        }

    }
});

export default filtersSlice.reducer;

export const { changeFilters } = filtersSlice.actions;