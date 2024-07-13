import React from 'react'
import { Filters } from './Filters.jsx'

export function Header() {
  return (
    <header>
      <h1 className='text-center'>React Shop</h1>
      <Filters />
    </header>
  )
}
