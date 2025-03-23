import { useAppDispatch, useAppSelector } from "../hooks/useStore"
import { addToCart, cleanCart } from "../store/cart/slice";

export function useCartActions() {
    const dispatch = useAppDispatch();
    const products = useAppSelector(state => state.products);
    const cart = useAppSelector(state => state.cart);

    const addProductToCar = (id: string) => {
        const product = products.filter(product => product.id === id)[0];
        dispatch(addToCart(product));
    }

    const clean = () => {
        dispatch(cleanCart());
    }
    return { addProductToCar, clean, cart };
}