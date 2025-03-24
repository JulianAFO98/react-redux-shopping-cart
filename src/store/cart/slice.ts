import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductWithCount } from "../../types";




const initialState: ProductWithCount[] = (() => {
    const localHostData = localStorage.getItem("cart-data");
    return localHostData ? JSON.parse(localHostData) : [];
})();




const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductWithCount>) => {
            const isAlreadyInCart = state.some(item => item.id === action.payload.id);
            isAlreadyInCart ? state : state.push(action.payload);
        },
        cleanCart: () => [],
        updateQtyCart: (state, action: PayloadAction<{ id: string, value: number }>) => {
            const index = state.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                const moreThanZero = state[index].count + action.payload.value;
                const count = moreThanZero === 0 ? 1 : state[index].count + action.payload.value;
                state[index].count = count;
            }
        },
        deleteFromCart: (state, action: PayloadAction<{ id: string }>) => {
            const index = state.findIndex(product => product.id === action.payload.id);
            state.splice(index, 1);
        }
    }
});

export default cartSlice.reducer;

export const { addToCart, cleanCart, updateQtyCart, deleteFromCart } = cartSlice.actions;