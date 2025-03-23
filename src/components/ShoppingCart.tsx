import { useState } from "react";
import CartIcon from "../assets/icons/CartIcon";
import { NavDesplegable } from "./NavDesplegable";

export function ShoppingCart() {
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen);
    }

    return (
        <>
            <div onClick={handleClick} >
                <CartIcon />
            </div>

            {
                isOpen && (
                    <NavDesplegable isOpen={isOpen} />
                )

            }
        </>

    )

}