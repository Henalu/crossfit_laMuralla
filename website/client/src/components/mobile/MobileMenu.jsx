import React from 'react'
import { NavLink } from 'react-router-dom'
// Redux
import { closeMenu } from '../../features/mobileMenuSlice'
import { useDispatch } from 'react-redux'
// Icons
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { resetForm } from '../../features/emailSentSlice'

const MobileMenu = () => {
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(closeMenu())
    }

    const handleResetForm =()=>{
        dispatch(resetForm())
        dispatch(closeMenu())
    }

    return (
        <div className='mobile-menu'>
            <NavLink to='/clases' onClick={handleClose}><span>Clases</span> <MdOutlineArrowForwardIos /></NavLink>
            <NavLink to='/store' onClick={handleClose}><span>Tienda</span> <MdOutlineArrowForwardIos /></NavLink>
            <NavLink to='/about' onClick={handleClose}><span>Equipo</span> <MdOutlineArrowForwardIos /></NavLink>
            <NavLink to='/thebox' onClick={handleClose}><span>TheBox</span> <MdOutlineArrowForwardIos /></NavLink>
            <NavLink to='/contact' onClick={handleResetForm}><span>Contacto</span> <MdOutlineArrowForwardIos /></NavLink>
        </div>
    )
}

export default MobileMenu
