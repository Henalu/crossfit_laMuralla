import React from 'react'
import BasicInfo from '../components/BasicInfo'
import ImageSlider from '../components/ImageSlider'
import Prices from '../components/Prices'
import SocialMedia from '../components/SocialMedia'
import WhoAreWe from '../components/WhoAreWe'

const Home = () => {
  return (
    <div className='home'>
      <ImageSlider />
      <WhoAreWe/>
      <BasicInfo/>
      <SocialMedia/>
      <Prices/>
    </div>
  )
}

export default Home
