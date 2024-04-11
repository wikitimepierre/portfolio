import CareScale from './CareScaleCopy'

function handleClick(plantName) {
  alert(`You want to buy 1 ${plantName}? Very good choice 🌱✨`)
}

function PlantItemCopy({ cover, name, water, light, price }) {
  return (
    <li className='jh-plant-item' onClick={() => handleClick}>
      <span className='jh-plant-item-price'>{price}€</span>
      <img className='jh-plant-item-cover' src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType='water' scaleValue={water} />
        <CareScale careType='light' scaleValue={light} />
      </div>
    </li>
  )
}

export default PlantItemCopy
