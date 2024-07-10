import React , { useState , useId } from 'react';

export function Filters({ onChange }) {

    const [minPrice, setMinPrice] = useState(0)

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ... prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
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
              <option value="home-decoration">Electrodomésticos</option>
              <option value="smartphones">Celulares</option>
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
            />
            <span className=''>${minPrice}</span>
          </div>
        </div>
      </div>
    </section>
  );
}