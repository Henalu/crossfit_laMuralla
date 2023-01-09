import React from 'react'
import { NavLink } from 'react-router-dom'
// Redux
import { openMenu, closeMenu } from '../../features/mobileMenuSlice'
import { useSelector, useDispatch } from 'react-redux'
// Icons
import { IconContext } from 'react-icons/lib'
import { AiFillShopping, AiOutlineClose } from 'react-icons/ai'
import { CgMenu } from 'react-icons/cg'

const MobileNavbar = () => {

    const mobileMenu = useSelector(state => state.mobileMenu)
    const dispatch = useDispatch()

    const handleOpen = () => {
        dispatch(openMenu())
    }
    const handleClose = () => {
        dispatch(closeMenu())
    }

    return (
        <nav className='mobile-navbar'>
            <div className='menu'>
                <IconContext.Provider value={{ className: 'react-icons' }}>
                    <NavLink to='/store'> <AiFillShopping /></NavLink>
                    {!mobileMenu.active
                        ? <p onClick={handleOpen}> <CgMenu /></p>
                        : <p onClick={handleClose}> <AiOutlineClose /></p>
                    }
                </IconContext.Provider>
            </div>
        </nav>
    )
}

export default MobileNavbar
