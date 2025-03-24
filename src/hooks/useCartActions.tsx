import { useAppDispatch, useAppSelector } from "../hooks/useStore"
import { addToCart, cleanCart, updateQtyCart, deleteFromCart } from "../store/cart/slice";

export function useCartActions() {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.products);
    const cart = useAppSelector(state => state.cart);

    const addProductToCar = (id: string) => {
        const product = products.filter(product => product.id === id)[0];
        const newProduct = { ...product, count: 1 };
        dispatch(addToCart(newProduct));
    }

    const updateQty = (value: number, id: string) => {
        dispatch(updateQtyCart({ value, id }));
    }

    const deleteItem = (id: string) => {
        dispatch(deleteFromCart({ id }));
    }

    const clean = () => {
        dispatch(cleanCart());
    }
    return { addProductToCar, clean, cart, updateQty, deleteItem };
}