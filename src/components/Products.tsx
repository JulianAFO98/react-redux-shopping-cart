import { useAppSelector } from "../hooks/useStore";
import { useCartActions } from "../hooks/useCartActions";



export function Products() {
    const products = useAppSelector(state => state.products);
    const { addProductToCar } = useCartActions();

    const handleClick = (id: string) => {
        addProductToCar(id);
    }

    return (
        <main>
            {

                products.map(product => {

                    return (
                        <div className="product-container">
                            <div className="product" key={product.id}>
                                <h3>{product.nombre}</h3>
                                <img src={product.imagen} alt={product.descripcion} />
                                <p>Precio: {product.precio}</p>
                            </div>
                            <button onClick={() => handleClick(product.id)}>Add</button>
                        </div>

                    )
                }
                )
            }
        </main>
    )

}
