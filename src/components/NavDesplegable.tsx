import { ADD_VALUES } from "../const";
import { useCartActions } from "../hooks/useCartActions";
import { NavDesplegableProps } from "../types"


export function NavDesplegable({ isOpen }: NavDesplegableProps) {
    const { cart, clean, updateQty, deleteItem } = useCartActions();
    const handleClean = () => {
        clean()
    }
    const handleQuantity = (actionType: string, id: string) => {
        actionType === ADD_VALUES.ADD_ONE ? updateQty(1, id) : updateQty(-1, id);
    }

    const handleDelete = (id: string) => {
        deleteItem(id);
    }

    return (
        <div className="desplegable">
            <div className="button-container">
                <button onClick={handleClean}>Clean Cart</button>
            </div>
            <ul className={`compras ${isOpen ? "block" : "hidden"}`}>
                {
                    cart.map(item => {
                        return (
                            <li>
                                <div className="x-btn-container">
                                    <button onClick={() => handleDelete(item.id)}>x</button>
                                </div>
                                <h3>{item.nombre}</h3>
                                <img src={item.imagen} alt={item.descripcion} />
                                <div className="quantity">
                                    <button onClick={() => handleQuantity(ADD_VALUES.REMOVE_ONE, item.id)}>-</button>
                                    <p>quantity: {item.count}</p>
                                    <button onClick={() => handleQuantity(ADD_VALUES.ADD_ONE, item.id)}>+</button>
                                </div>

                            </li>
                        )
                    }
                    )
                }
            </ul>
        </div >

    )
}