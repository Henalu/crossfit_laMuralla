import React from 'react'
import { NavLink } from 'react-router-dom'
import running from '../img/running.jpg'

const Prices = () => {
    return (
        <div className='pricesInfo' style={{ backgroundImage: `url(${running})` }}>
            <div className='layer'>
                <article>
                    <hgroup>
                        <h1>Imbatibles de principio a fin</h1>
                        <h2>Tarifas</h2>
                    </hgroup>
                    <div className='prices'>
                        <NavLink to='/contact'>
                            <h3>ILimitados</h3>
                            <h4>55€</h4>
                        </NavLink>
                        <NavLink to='/contact'>
                            <h3>ILimitados + OpenBox</h3>
                            <h4>75€</h4>
                        </NavLink>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Prices
