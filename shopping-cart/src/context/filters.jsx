import { createContext, useState } from 'react'

// Crea un contexto para los filtros
// Este contexto será consumido por los componentes que necesiten acceder a los filtros
export const FiltersContext = createContext()

// Componente proveedor del contexto de filtros
// Este componente envuelve a los componentes hijos y les proporciona acceso al contexto
export function FiltersProvider ({ children }) {
  // Estado local para los filtros
  // Utiliza useState para crear un estado con valores iniciales para category y minPrice
  const [filters, setFilters] = useState({
    category: 'all',  // Valor inicial para la categoría
    minPrice: 250     // Valor inicial para el precio mínimo
  })

  // Retorna el Provider del contexto
  return (
    <FiltersContext.Provider 
      value={{
        filters,     // Proporciona el estado actual de los filtros
        setFilters   // Proporciona la función para actualizar los filtros
      }}
    >
      {children}  {/* Renderiza los componentes hijos dentro del Provider */}
    </FiltersContext.Provider>
  )
}