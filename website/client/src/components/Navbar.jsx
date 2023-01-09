import React from 'react'
import { NavLink } from 'react-router-dom'
// Redux
import { useDispatch } from 'react-redux'
import { resetForm } from '../features/emailSentSlice'

const Navbar = () => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(resetForm())
  }

  return (
    <nav className='navbar'>
      <div className='menu'>
        <NavLink to='/clases'>Clases</NavLink>
        <NavLink to='/store'>Material</NavLink>
        <NavLink to='/about'>Equipo</NavLink>
        <NavLink to='/thebox'>TheBox</NavLink>
        <NavLink to='/contact' onClick={handleClick}>Contacto</NavLink>
      </div>
      <div className='join'>
        <NavLink to='/contact'>Apuntate!</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
