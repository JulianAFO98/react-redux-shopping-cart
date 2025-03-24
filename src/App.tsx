import { Navbar } from "./components/Navbar"
import { Products } from "./components/Products"
import { ShoppingCart } from "./components/ShoppingCart"
import { TotalPrice } from "./components/TotalPrice"

function App() {
  return (
    <>
      <Navbar />
      <Products />
      <ShoppingCart />
      <TotalPrice />
    </>
  )
}

export default App
