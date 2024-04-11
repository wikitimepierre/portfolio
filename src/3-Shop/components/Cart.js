import { useEffect } from 'react'
import logototal from '../assets/total.png'

function Cart({ cart, updateCart }) {
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0)

  useEffect(() => { document.title = `${total}€` }, [total])

  return (
    <div className='pierre-backgroundcart'>
      {cart.length > 0 ? (
        <div>
          <img src={logototal} className='pierre-totalpanel' alt="logo" />
          <p className='pierre-shopprice'>{total}€</p>
          <ul className='pierre-shopamounts'>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount}
              </div>
            ))}
          </ul>
          <button onClick={() => updateCart([])}>Clear</button>
        </div>
      ) : (<div></div>)}

    </div>
  )
}

export default Cart
