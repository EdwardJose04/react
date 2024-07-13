import '../css/cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'

function CartItem ({ thumbnail, price, title, quantity, addToCart, removeFromCart, reduceQuantity }) {
  return (
    <li className="cart-item">
      <button className="cart-item-remove" onClick={removeFromCart}>×</button>
      <div className="cart-item-info">
        <img
          src={thumbnail}
          alt={title}
          className="cart-item-image"
        />
        <div>
          <strong>{title}</strong>
          <p>${price}</p>
        </div>
      </div>
      <div className="cart-item-actions">
        <button className="cart-item-button" onClick={reduceQuantity}>-</button>
        <span className="cart-item-quantity">{quantity}</span>
        <button className="cart-item-button" onClick={addToCart}>+</button>
      </div>
    </li>
  )
}

export function Cart () {
  // Genera un ID único para el checkbox del carrito
  const cartCheckboxId = useId()

  // Extrae las funciones y el estado del carrito del hook useCart
  const { cart, clearCart, addToCart, removeFromCart, reduceQuantity } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <h3>Tu Carrito</h3>
        <ul className="cart-items">
          {/* Mapea cada producto en el carrito a un componente CartItem */}
          {cart.map(product => (
            <CartItem
              key={product.id}
              // Usa las funciones extraídas del hook useCart
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              reduceQuantity={() => reduceQuantity(product)}
              {...product}
            />
          ))}
        </ul>

        {/* Usa la función clearCart extraída del hook useCart */}
        <button className="clear-cart-button" onClick={clearCart}>
          <ClearCartIcon />
          Vaciar Carrito
        </button>
      </aside>
    </>
  )
}