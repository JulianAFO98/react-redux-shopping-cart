import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product } from "../../types";


const initialState: Product[] = (() => {
    const localHostData = localStorage.getItem("cart-data");
    return localHostData ? JSON.parse(localHostData) : [];
})();




const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const isAlreadyInCart = state.some(item => item.id === action.payload.id);
            isAlreadyInCart ? state : state.push(action.payload);
        },
        cleanCart: () => [],
    }
});

export default cartSlice.reducer;

export const { addToCart, cleanCart } = cartSlice.actions;