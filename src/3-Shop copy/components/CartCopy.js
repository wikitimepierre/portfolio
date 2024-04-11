import { useState, useEffect } from 'react'

function CartCopy({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true)
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0)

  useEffect(() => { document.title = `${total}€` }, [total])

  return isOpen ? (
    <div className='jh-cart'>
      <button
        className='jh-cart-toggle-button'
        onClick={() => setIsOpen(false)}
      >
        Close
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Cart</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
              </div>
            ))}
          </ul>
          <h3>{total}€</h3>
          <button onClick={() => updateCart([])}>Clear Basket</button>
        </div>
      ) : (
        <div>empty</div>
      )}
    </div>
  ) : (
    <div className='jh-cart-closed'>
      <button
        className='jh-cart-toggle-button'
        onClick={() => setIsOpen(true)}
      >
        Clear Basket
      </button>
    </div>
  )
}

export default CartCopy
