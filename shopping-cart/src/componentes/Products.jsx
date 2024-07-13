import React from 'react';
import '../css/products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx';
import { useCart } from '../hooks/useCart.js';

export function Products({ products }) {
  // Extrae las funciones necesarias del hook useCart
  const { addToCart, cart, removeFromCart, reduceQuantity } = useCart()

  // Función para verificar si un producto está en el carrito
  // Se usa más adelante en el mapeo de productos
  const checkProductInCart = product => {
    // Utiliza el método some para verificar si algún item en el carrito tiene el mismo id que el producto
    return cart.some(item => item.id === product.id)
  }

  return (
    <div className="container">
      <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map(product => { 
          // Utiliza la función ya definida para verificar si el producto está en el carrito
          const isProductInCart = checkProductInCart(product)
          // Busca el item correspondiente en el carrito para obtener su cantidad
          const cartItem = cart.find(item => item.id === product.id)
          
          return (
            <li key={product.id} className="col">
              <div className="card h-100 d-flex flex-column">
                <div className="image-container">
                  <img
                    src={product.thumbnail}
                    className="card-img-top img-fluid"
                    alt={product.title}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate">{product.title}</h5>
                  <p className="card-text mb-1">{product.category}</p>
                  <p className="card-text fw-bold">${product.price}</p>
                  {/* Renderizado condicional basado en si el producto está en el carrito */}
                  {isProductInCart ? (
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      {/* Usa la función reduceQuantity del hook useCart */}
                      <button 
                        className="btn btn-danger fw-bold"
                        onClick={() => reduceQuantity(product)}
                      >
                        -
                      </button>
                      <span>{cartItem.quantity}</span>
                      {/* Usa la función addToCart del hook useCart */}
                      <button 
                        className="btn btn-primary fw-bold"
                        onClick={() => addToCart(product)}
                      >
                        +
                      </button>
                      {/* Usa la función removeFromCart del hook useCart */}
                      <button 
                        className="btn btn-danger"
                        onClick={() => removeFromCart(product)}
                      >
                        <RemoveFromCartIcon />
                      </button>
                    </div>
                  ) : (
                    <button 
                      className="btn btn-primary mt-auto"
                      onClick={() => addToCart(product)}
                    >
                      <AddToCartIcon /> Añadir al Carrito
                    </button>
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}