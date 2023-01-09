import React, { useEffect, useState } from 'react'
import weights from '../img/weights.jpg'
import runningshoes from '../img/runningshoes.jpg'
import kettlebell from '../img/kettlebell.jpg'
import dumbell from '../img/dumbell.jpg'
import rings from '../img/rings.jpg'
import { getShoes } from '../services/api'

const Store = () => {

  const [shoesData, setShoesData] = useState()
  const loadShoes = async () => {
    const data = await getShoes()
    setShoesData(data)
  }
  useEffect(() => {
    loadShoes()
  }, [])

  return (
    <div className='store'>
      <div className='img-container' style={{ backgroundImage: `url(${weights})` }}>
        <div className='layer'>
          <h1>Equipate con Reebok</h1>
        </div>
      </div>
      <section className='products-container'>
        {shoesData && shoesData.map((shoe) => {
          return (
            <div className='product' key={shoe._id}>
              <a className='product-img' href={shoe.link} target='_blank' rel='noreferrer' style={{ backgroundImage: `url(${shoe.img})` }}>
                <div></div>
              </a>
              <div className='product-info'>
                <h2>{shoe.title}</h2>
                <h4>{shoe.price}</h4>
                <h4>{shoe.color}</h4>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Store