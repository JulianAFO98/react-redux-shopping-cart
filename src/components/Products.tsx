import { useCartActions } from "../hooks/useCartActions";
import { useFilters } from "../hooks/useFilters";



export function Products() {
    const { filteredProducts } = useFilters();
    const { addProductToCar } = useCartActions();

    const handleClick = (id: string) => {
        addProductToCar(id);
    }

    return (
        <main>
            {
                filteredProducts.map(product => {

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
