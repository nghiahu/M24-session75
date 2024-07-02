import React from 'react'
import Product from './components/Product'
import Cart from './components/Cart'

export default function App() {
  return (
    <div style={{display:'flex'}}>
      <Product></Product>
      <Cart></Cart>
    </div>
  )
}
