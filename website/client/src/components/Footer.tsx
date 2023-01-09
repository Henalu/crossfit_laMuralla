import React from 'react'
import { NavLink } from 'react-router-dom'
import Map from './Map'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='ft-content'>
        <div className='ft-section'>
          <h2><NavLink to='/about'>Nosotros</NavLink></h2>
          <ul>
            <li><a href="http://google.com" target='_blank' rel='noreferrer'> ¿Qué es el crossfit?</a></li>
            <li><a href="http://google.com" target='_blank' rel='noreferrer'> Beneficios</a></li>
            <li><a href="http://google.com" target='_blank' rel='noreferrer'> Nuestra historia</a></li>
            <li><a href="http://google.com" target='_blank' rel='noreferrer'> FAQ</a></li>
          </ul>
        </div>

        <div className='ft-section'>
          <h2><a href='https://www.crossfit.com/' target='_blank' rel='noreferrer'>Comunidad</a></h2>
          <ul>
            <li><a href="http://google.com" target='_blank' rel='noreferrer'> Familia</a></li>
            <li><a href="http://google.com" target='_blank' rel='noreferrer'> Eventos</a></li>
            <li><a href="http://google.com" target='_blank' rel='noreferrer'> Equipo</a></li>
          </ul>
        </div>

        <div className='ft-section'> 
          <h2><NavLink to='/about'>Meritos</NavLink></h2>
          <ul>
            <li><a href="http://google.com" target='_blank' rel='noreferrer'> Campeonatos</a></li>
            <li><a href="http://google.com" target='_blank' rel='noreferrer'> Jueces</a></li>
            <li><a href="http://google.com" target='_blank' rel='noreferrer'> Titulaciones</a></li>
            <li><a href="http://google.com" target='_blank' rel='noreferrer'> Premios</a></li>
          </ul>
        </div>

        <div className='ft-section'>
          <h2><a href='https://play.google.com/store/apps/details?id=santi.wodbuster&hl=es'>Consigue la App</a></h2>
          <ul>
            <li><a href="http://google.com" target='_blank' rel='noreferrer'> Reservas</a></li>
            <li><a href="http://google.com" target='_blank' rel='noreferrer'> Pagos</a></li>
            <li><a href="http://google.com" target='_blank' rel='noreferrer'> Marcas Personales</a></li>
            <li><a href="http://google.com" target='_blank' rel='noreferrer'> Entrenamientos</a></li>
            <li><a href="http://google.com" target='_blank' rel='noreferrer'> Chat</a></li>
          </ul>
        </div>
      </div>

      <div className='location'>
        <h2><a
          href='https://www.google.es/maps/place/CrossFit+La+Muralla/@36.5465281,-4.6293151,15.3z/data=!4m5!3m4!1s0xd72e23b603c0c81:0x86f53179a6f3aa2c!8m2!3d36.5471237!4d-4.6346292?hl=es'
          target='_blank'  rel='noreferrer'>Donde Estamos
        </a></h2>
        <Map/>
      </div>
    </footer>
  )
}

export default Footer
