import { useState, useEffect } from 'react'
import Cart from '../components/Cart'
import ShoppingList from '../components/ShoppingList'

function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div className='pierre-layout-inner'>
      <div className='pierre-layout-inner2'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
    </div>
  )
}

export default App
