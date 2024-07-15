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
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart, removeFromCart, reduceQuantity, formatPrice, calculateTotal, getTotalItems} = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
        {getTotalItems() > 0 && (
          <div className='cart-badge'>{getTotalItems()}</div>
        )}
      </label>

      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        {/* Si el carrito esta vacio mostrará esto */}
        {cart.length === 0 ? (
        <>
        <h3 className='text-center pt-5'>Tu carrito esta vacio</h3>
          <img className='img-fluid'
          src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
          alt="Carrito Vacio" 
          />

        </>
          
          // Si la logitud es mayor a 0 entonces mostrara esto
        ) : (
          <>
          <h3>Tu Carrito</h3>
            <span><strong>Total:</strong> ${formatPrice(calculateTotal())}</span>
            <ul className="cart-items">
              {cart.map(product => (
                <CartItem
                  key={product.id}
                  addToCart={() => addToCart(product)}
                  removeFromCart={() => removeFromCart(product)}
                  reduceQuantity={() => reduceQuantity(product)}
                  {...product}
                />
              ))}
            </ul>
            <button className="clear-cart-button" onClick={clearCart}>
              <ClearCartIcon />
              Vaciar Carrito
            </button>
          </>
        )}
      </aside>
    </>
  )
}