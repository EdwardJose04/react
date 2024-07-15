import React , { useState , useId } from 'react';
import { useFilters } from '../hooks/useFilters';

export function Filters() {

    const { filters , setFilters } = useFilters ()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ... prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ... prevState,
            category: event.target.value
        }))
    }

    

  return (
    <section className='filters mt-3 container'>
      <div className="row align-items-center">
        <div className="col-6 col-md-4">
          <div className="input-group input-group-sm">
            <label className="input-group-text" htmlFor={categoryFilterId} >Categoría:</label>
            <select id={categoryFilterId} className="form-select form-select-sm" onChange={handleChangeCategory}>
              <option value="all">Todas</option>
              <option value="laptops">Portátiles</option>
              <option value="home-decoration">Decoración</option>
              <option value="smartphones">Celulares</option>
              <option value="fragrances">Lociones</option>
              <option value="skincare">Skincare</option>
              <option value="groceries">Golosinas</option>
            </select>
          </div>
        </div>
        <div className="col-6 col-md-4 offset-md-4">
          <div className="input-group input-group-sm">
            <label className="input-group-text" htmlFor={minPriceFilterId}>Precio a partir de:</label>
            <input
              type='range'
              className='form-range'
              id={minPriceFilterId}
              min='0'
              max='10000'
              onChange={handleChangeMinPrice}
              value={filters.minPrice}
            />
            <span className=''>${filters.minPrice}</span>
          </div>
        </div>
      </div>
    </section>
  );
}