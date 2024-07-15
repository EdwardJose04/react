import { products as initialProducts } from './mocks/products.json'
import { Products } from './componentes/Products.jsx'
import { Header } from './componentes/Header.jsx'
import { Footer } from './componentes/Footer.jsx'
import { useFilters } from './hooks/useFilters.js'
import { Cart } from './componentes/Cart.jsx'
import { CartProvider } from './context/cart.jsx'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
    </>
  )
}

export default App