import { useState } from 'react'
import { plantList } from '../datas/plantList'
import Categories from './Categories'
import CareScale from './CareScale'

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState('')
  const categories = plantList.reduce(
    (acc, elem) =>
      acc.includes(elem.category) ? acc : acc.concat(elem.category),
    []
  )

  function addToCart(name, price) {
    const currentPlantAdded = cart.find(plant => plant.name === name)
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(plant => plant.name !== name)
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantAdded.amount + 1 }
      ])
    } else {
      updateCart([...cart, { name, price, amount: 1 }])
    }
  }

  return (
    <div>
      <Categories categories={categories} setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
      <div className='pierre-plant-list'>
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <button className='pierre-plant-item' onClick={() => addToCart(name, price)}>
              <img className='pierre-plant-item-cover' src={cover} alt={`${name} cover`} />
              <div className='pierre-shoprow'>
                <div className='pierre-shopleft'>
                  {price}€<br />
                  {name}
                </div>
                <div className='pierre-shopright'>
                  <CareScale careType='water' scaleValue={water} />
                  <CareScale careType='light' scaleValue={light} />
                </div>
              </div>
            </button>
          ) : null
        )}
      </div>
    </div>
  )
}

export default ShoppingList
