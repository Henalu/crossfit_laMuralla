import React from 'react'
import tyrePush from '../img/tyre-push.jpg'
import running from '../img/running.jpg'
import weightlifting from '../img/weightlifting.jpg'

const BasicInfo = () => {
    return (
        <div className='info-container'>
            <h2>Info</h2>
            <div className='basicInfo'>
                <div className='info'>
                    <div className='img-container' style={{ backgroundImage: `url(${tyrePush})` }}></div>
                    <article>
                        <h3>Box Oficial</h3>
                        <p>Primer Box Oficial CrossFit en el área de Fuengirola-Mijas
                            Más de 500m², vestuarios, Rack para 30 puestos de dominadas, 4 racks para bench press-squats-press, etc, 8 puestos de muscle ups, 2 cuerdas de trepa de 5 metros, remos Concept 2, Assault Airbikes e infinidad de material para clases de hasta 25 personas</p>
                    </article>
                </div>
                <div className='info'>
                    <div className='img-container' style={{ backgroundImage: `url(${running})` }}></div>
                    <article>
                        <h3>Excelente Ubicacion</h3>
                        <p>La situación estratégica de nuestro Box permite un fácil acceso desde cualquier punto y numerosas plazas de aparcamiento</p>
                    </article>
                </div>
                <div className='info'>
                    <div className='img-container' style={{ backgroundImage: `url(${weightlifting})` }}></div>
                    <article>
                        <h3>Los Mejores Entrenadores</h3>
                        <p>Entrenadores certificados y con varias especialidades, además de ser competidores en activo</p>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default BasicInfo
