import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import rope from '../img/rope.jpg'
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai'

const WhoAreWe = () => {

    const [isStoryExpanded, setIsStoryExpanded] = useState(false)

    return (
        <div className='whoarewe'>
            <div className='story'>
                <div className='title'>
                    <h2>Nuestra Historia</h2>
                    <h3>Box Oficial Desde 2012</h3>
                    <button><NavLink to='/about'>Equipo</NavLink></button>
                </div>
                {!isStoryExpanded
                    ? (
                        <article>
                            <h3>Como empezamos</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat odio eu est venenatis pharetra. Nullam faucibus porta turpis ac feugiat. Morbi eget gravida nulla. Donec consequat facilisis ornare. Sed scelerisque arcu et molestie sollicitudin.</p>
                        </article>

                    )
                    : (
                        <article>
                            <h3>Como empezamos</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat odio eu est venenatis pharetra. Nullam faucibus porta turpis ac feugiat. Morbi eget gravida nulla. Donec consequat facilisis ornare. Sed scelerisque arcu et molestie sollicitudin.</p>

                            <h3>Recorrido</h3>
                            <p>Aliquam erat volutpat. Etiam posuere aliquam porta. Aliquam rutrum convallis lorem. Aliquam non sapien non urna sollicitudin dapibus eu at justo. Aenean id facilisis enim. Nunc maximus porttitor odio, vel tempus sem accumsan eget. </p>

                            <h3>Titulo</h3>
                            <p>Morbi quis tristique ligula. Suspendisse fermentum dolor pellentesque nibh accumsan, sit amet vestibulum felis tincidunt. Aliquam erat volutpat. Etiam posuere aliquam porta.</p>
                        </article>
                    )
                }
                <div className='media'>
                    <h2>Ponte en Forma</h2>
                    <div className='img-container' style={{ backgroundImage: `url(${rope})` }}></div>
                    <h4><NavLink to="/contact">Saber más...</NavLink></h4>
                    <h4>Unete a Crossfit La Muralla</h4>
                </div>
            </div>
            {!isStoryExpanded
                ? (
                    <div className='bottom'>
                        <p onClick={e => setIsStoryExpanded(true)}><span>Ver Más</span> <span><AiFillCaretDown /></span></p>
                    </div>
                )
                : (
                    <div className='bottom'>
                        <p onClick={e => setIsStoryExpanded(false)}><span>Ver Más</span> <span><AiFillCaretUp /></span></p>
                    </div>
                )
            }

        </div>
    )
}

export default WhoAreWe
