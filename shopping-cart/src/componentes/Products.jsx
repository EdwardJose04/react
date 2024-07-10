import React from 'react';
import './products.css';
import { AddToCartIcon } from './Icons.jsx';

export function Products({ products }) {
  return (
    <div className="container">
      <ul className="list-unstyled row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map(product => (
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
                <button className="btn btn-primary mt-auto">
                  <AddToCartIcon />
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}