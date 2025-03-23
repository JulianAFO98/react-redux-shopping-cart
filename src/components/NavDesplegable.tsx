
import { useCartActions } from "../hooks/useCartActions";
import { NavDesplegableProps } from "../types"


export function NavDesplegable({ isOpen }: NavDesplegableProps) {
    const { cart, clean } = useCartActions();
    const handleClick = () => {
        clean()
    }

    return (
        <div className="desplegable">
            <div className="button-container">
                <button onClick={handleClick}>Clean Cart</button>
            </div>
            <ul className={`compras ${isOpen ? "block" : "hidden"}`}>
                {
                    cart.map(item => {
                        return (
                            <li>
                                <h3>{item.nombre}</h3>
                                <img src={item.imagen} alt={item.descripcion} />
                                <div>
                                    <button>+</button>
                                    <p>qty</p>
                                </div>

                            </li>
                        )
                    }
                    )
                }
            </ul>
        </div>

    )
}