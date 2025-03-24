import { useFilters } from "../hooks/useFilters"




export function Navbar() {

    const { setPriceFilter, precio } = useFilters();

    const handleChange = (price: number) => {
        setPriceFilter(price);
    }


    return (
        <nav>
            <h1>Shopping Cart</h1>
            <div className="filter-container">
                <input
                    type="range"
                    id="price"
                    name="price"
                    min="0"
                    max="80"
                    onChange={(e) => handleChange(parseFloat(e.target.value))}
                />

                <label htmlFor="price">Price:{precio}</label>
            </div>
        </nav>
    )

}
