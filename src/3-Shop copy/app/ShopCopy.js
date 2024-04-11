import { useState, useEffect } from 'react'
import Cart from '../components/CartCopy'
import ShoppingList from '../components/ShoppingListCopy'

// TODO: click on the picture not the add button
function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <div className='jh-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
    </div>
  )
}

export default App
