import { createSlice } from "@reduxjs/toolkit";
import { productos } from "../../mocks/datos";
import { Product } from "../../types";

const DEFAULT_STATE = productos;

const initialState: Product[] = DEFAULT_STATE;


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        //Aca irian los metodos para agregar productos AL STORE o quitarlos;
    }
});

export default productSlice.reducer;