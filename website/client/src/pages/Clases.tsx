import React from 'react'
import getready from '../img/getready.jpg'
import tyrePush from '../img/tyre-push.jpg'
import running from '../img/running.jpg'
import weightlifting from '../img/weightlifting.jpg'
const Clases = () => {

    return (
        <div className='clases'>
            <div className='img-container' style={{ backgroundImage: `url(${getready})` }}>
                <div className='layer'>
                    <h1>WODs & OpenBox</h1>
                </div>
            </div>

            <section className='clases-container'>
                <div className='schedule'>
                    <div className='img-container' style={{ backgroundImage: `url(${tyrePush})` }}>
                        <div className='layer'>
                            <h2>Lunes a Jueves</h2>
                        </div>
                    </div>
                    <article>
                        <table>
                            <thead>
                                <tr>
                                    <th>Horarios</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td> 8:00 </td></tr>

                                <tr><td> 09:30</td></tr>

                                <tr><td> 10:30</td></tr>

                                <tr><td> 13:00</td></tr>

                                <tr><td> 14:30</td></tr>

                                <tr><td> 16:00</td></tr>

                                <tr><td> 17:00</td></tr>

                                <tr><td> 19:00</td></tr>

                                <tr><td> 20:00</td></tr>

                                <tr><td> 21:00</td></tr>
                            </tbody>
                        </table>
                        <p>Las clases tienen una duración de una hora</p>
                        <p>En todas las horas indicadas hay <strong>clases guiadas(WOD)</strong> y espacio para <strong>Open Box</strong> (entrenamiento libre)</p>
                    </article>
                </div>
                <div className='schedule'>
                    <div className='img-container' style={{ backgroundImage: `url(${running})` }}>
                        <div className='layer'>
                            <h2>Viernes</h2>
                        </div>
                    </div>
                    <article>
                    <table>
                            <thead>
                                <tr>
                                    <th>Horarios</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td> 8:00 </td></tr>

                                <tr><td> 09:30</td></tr>

                                <tr><td> 10:30</td></tr>

                                <tr><td> 13:00</td></tr>

                                <tr><td> 14:30</td></tr>

                                <tr><td> 16:00</td></tr>

                                <tr><td> 17:00</td></tr>

                                <tr><td> 19:00</td></tr>

                                <tr><td> 20:00</td></tr>

                            </tbody>
                        </table>
                        <p>Las clases tienen una duración de una hora</p>
                        <p>En todas las horas indicadas hay <strong>clases guiadas(WOD)</strong> y espacio para <strong>Open Box</strong> (entrenamiento libre)</p>
                    </article>
                </div>
                <div className='schedule'>
                    <div className='img-container' style={{ backgroundImage: `url(${weightlifting})` }}>
                        <div className='layer'>
                            <h2>Sabado</h2>
                        </div>
                    </div>
                    <article>
                    <table>
                            <thead>
                                <tr>
                                    <th>Horarios</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td> 10:00 </td></tr>

                                <tr><td> 11:30</td></tr>

                            </tbody>
                        </table>
                        <p>Las clases tienen una duración de una hora</p>
                        <p>En todas las horas indicadas hay <strong>clases guiadas(WOD)</strong> y espacio para <strong>Open Box</strong> (entrenamiento libre)</p>
                    </article>
                </div>
            </section>
        </div>
    )
}

export default Clases
