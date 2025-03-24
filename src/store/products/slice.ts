import { createSlice } from "@reduxjs/toolkit";
import { productos } from "../../mocks/datos";
import { Product } from "../../types";



const initialState: Product[] = productos;


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        //Aca irian los metodos para agregar productos AL STORE o quitarlos; 
    }
});

export default productSlice.reducer;