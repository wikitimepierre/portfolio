import CareScale from './CareScale'

function handleClick(plantName) {
  alert(`You want to buy 1 ${plantName}? Very good choice 🌱✨`)
}

function PlantItem({ cover, name, water, light, price }) {
  return (
    <li className='pierre-plant-item' onClick={() => handleClick}>
      <img className='pierre-plant-item-cover' src={cover} alt={`${name} cover`} />
      <div>
        <span>{name}</span>
        <span>{price}€</span>
        <span><CareScale careType='water' scaleValue={water} /></span>
        <span><CareScale careType='light' scaleValue={light} /></span>
      </div>
    </li>
  )
}

export default PlantItem
