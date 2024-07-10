// En App.jsx

import React, { useState } from 'react';
import { products } from './mocks/products.json';
import { Products } from './componentes/Products.jsx';
import Header from './componentes/Header.jsx'; // Importa el componente Header sin llaves

function App() {
  const [filters, setFilters] = useState({ category: 'all', minPrice: 0 });

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        (filters.minPrice <= product.price) &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  }

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters}/>
      <h1 className='text-center'>Shopping Cart</h1>
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
