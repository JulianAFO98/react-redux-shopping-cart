import { useCartActions } from "../hooks/useCartActions"


export function TotalPrice() {
    const { cart } = useCartActions();
    let totalPrice = cart.reduce((acum, item) => acum + (item.precio * item.count), 0); // TODO : move this to cart slice initial state with a new type making totalPrice a Propertie
    totalPrice = Math.round(totalPrice * 100) / 100;
    return (
        <div className="price-container">
            <p>Total:{totalPrice ? totalPrice : 0}$</p>
        </div>
    )


}