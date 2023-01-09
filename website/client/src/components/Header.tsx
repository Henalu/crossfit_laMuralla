import React from 'react'
import logoLaMuralla from '../img/logoLaMuralla.png'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <h1><NavLink to='/home'><img src={logoLaMuralla} alt="" /></NavLink></h1>
    </header>
  )
}

export default Header
