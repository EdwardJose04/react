import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
  // Inicializa el carrito con datos del localStorage si existen
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Actualiza localStorage cada vez que el carrito cambia
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = product => {
    setCart(prevCart => {
      const productInCartIndex = prevCart.findIndex(item => item.id === product.id)
      if (productInCartIndex >= 0) {
        const newCart = structuredClone(prevCart)
        newCart[productInCartIndex].quantity += 1
        return newCart
      } else {
        return [
          ...prevCart,
          {
            ...product,
            quantity: 1
          }
        ]
      }
    })
  }

  const removeFromCart = product => {
    setCart(prevCart => prevCart.filter(item => item.id !== product.id))
  }

  const reduceQuantity = product => {
    setCart(prevCart => {
      const productInCartIndex = prevCart.findIndex(item => item.id === product.id)
      if (productInCartIndex >= 0) {
        const newCart = structuredClone(prevCart)
        if (newCart[productInCartIndex].quantity > 1) {
          newCart[productInCartIndex].quantity -= 1
          return newCart
        } else {
          return prevCart.filter(item => item.id !== product.id)
        }
      }
      return prevCart
    })
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + (parseFloat(item.price) * item.quantity);
    }, 0);
  };

  const formatPrice = (price) => {
    return parseFloat(price).toLocaleString();
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart,
      removeFromCart,
      reduceQuantity,
      formatPrice,
      calculateTotal,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  )
}