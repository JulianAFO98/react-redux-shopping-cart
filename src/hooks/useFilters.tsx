import { useAppDispatch, useAppSelector } from "../hooks/useStore"
import { changeFilters } from "../store/filters/slice";

export function useFilters() {
    const products = useAppSelector(state => state.products);
    const filters = useAppSelector(state => state.filters);
    const precio = filters.price;
    const dispatch = useAppDispatch();

    const setPriceFilter = (price: number) => {
        dispatch(changeFilters({ price }))
    }

    const filteredProducts = products.filter(product => product.precio < precio);

    return { setPriceFilter, filteredProducts, precio };
}