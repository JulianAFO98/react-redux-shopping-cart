import { configureStore, Middleware } from "@reduxjs/toolkit";
import productReducer from "./products/slice";
import cartReducer from "./cart/slice";
import { Product } from "../types";



const persistenceLocalStorageMiddleWare: Middleware = (store) => (next) => (action) => {
    const { cart: prevCart }: { cart: Product[] } = store.getState();
    next(action);
    const { cart: nextCart }: { cart: Product[] } = store.getState();
    if (prevCart.length !== nextCart.length) {
        localStorage.setItem("cart-data", JSON.stringify(nextCart));
    }
};




export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(persistenceLocalStorageMiddleWare)
    },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;