import { createContext, useState } from "react";

// Crea un contexto para el carrito
export const CartContext = createContext()

export function CartProvider({ children }) {
  // Estado para almacenar los items del carrito
  const [cart, setCart] = useState([]);

  // Función para añadir un producto al carrito
  const addToCart = product => {
    // Busca si el producto ya está en el carrito
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      // Si el producto ya está en el carrito, aumenta su cantidad
      const newCart = structuredClone(cart)  // Crea una copia profunda del carrito
      newCart[productInCartIndex].quantity += 1
      setCart(newCart)
    } else {
      // Si el producto no está en el carrito, lo añade
      setCart(prevState => ([
        ...prevState,
        {
          ...product,
          quantity: 1
        }
      ]))
    }
  }

  // Función para eliminar un producto del carrito
  const removeFromCart = product => {
    // Filtra el carrito para excluir el producto a eliminar con su id
    setCart(prevState => prevState.filter(item=> item.id !== product.id))
  }

  // Función para reducir la cantidad de un producto en el carrito
  const reduceQuantity = product => {
    // Busca el índice del producto en el carrito
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      if (newCart[productInCartIndex].quantity > 1) {
        // Si la cantidad es mayor que 1, la reduce
        newCart[productInCartIndex].quantity -= 1
        setCart(newCart)
      } else {
        // Si la cantidad es 1, elimina el producto del carrito
        removeFromCart(product)
      }
    }
  }

  // Función para vaciar el carrito
  const clearCart = () => {
    setCart([])
  }

  // Provee el contexto con las funciones y el estado del carrito
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart,
      removeFromCart,
      reduceQuantity
    }}>
      {children}
    </CartContext.Provider>
  )
}