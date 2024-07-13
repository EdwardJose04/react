import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

export function useFilters () {
  // Obtiene los filtros y la función para actualizarlos del contexto
  const { filters, setFilters } = useContext(FiltersContext)

  // Función para filtrar productos basados en los filtros actuales
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        // Filtra por precio mínimo
        product.price >= filters.minPrice &&
        (
          // Filtra por categoría (si no es 'all')
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}