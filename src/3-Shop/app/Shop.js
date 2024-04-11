import { useState, useEffect } from 'react'
import Cart from '../components/Cart'
import ShoppingList from '../components/ShoppingList'
import logo from '../assets/panel2.png'

function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div className='pierre-layout-inner'>
      <Cart cart={cart} updateCart={updateCart} />
      <div className='pierre-layout-inner2'>
        <ShoppingList cart={cart} updateCart={updateCart} />
        <div className='pierre-backgroundshop'>
          <img src={logo} className='pierre-panel2' alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default App
