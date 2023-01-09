import React, { useState } from 'react'
import agility from '../img/agility.jpg'
import { defaultPost } from '../services/api'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { emailSent } from '../features/emailSentSlice'
const Contact = () => {

  const isEmailSent = useSelector(state => state.sentEmail)
  const dispatch = useDispatch()

  // const [sent, setSent] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    surname: '',
    email: '',
    tlf: '',
    address: '',
    text: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSumbit = async (e) => {
    e.preventDefault()
    setFormValues({
      name: '',
      surname: '',
      email: '',
      tlf: '',
      address: '',
      text: ''
    })
    dispatch(emailSent())
    try {
      await defaultPost('send_email', 'POST', formValues)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='contact'>
      <div className='img-container' style={{ backgroundImage: `url(${agility})` }}>
        <div className='layer'>
          <h1>Hablemos</h1>
        </div>
      </div>
      {!isEmailSent.sent ? (
        <section className='form-container'>
          <form action="" onSubmit={(e) => handleSumbit(e)}>
            <label htmlFor="name">Nombre</label>
            <input
              name='name'
              type="text"
              placeholder='Escribe aqui tu nombre'
              onChange={handleChange}
              value={formValues.name}
            />

            <label htmlFor="surname">Apellidos</label>
            <input
              name='surname'
              type="text"
              placeholder='Escribe aqui tus apellidos'
              onChange={handleChange}
              value={formValues.surname}
            />

            <label htmlFor="email">Email</label>
            <input
              name='email'
              type="text"
              placeholder='Escribe aqui tu correo electronico'
              onChange={handleChange}
              value={formValues.email}
            />

            <label htmlFor="tlf">Telefono</label>
            <input
              name='tlf'
              type="text"
              placeholder='Escribe aqui tu numero de telefono'
              onChange={handleChange}
              value={formValues.tlf}
            />

            <label htmlFor="address">Direccion</label>
            <input
              name='address'
              type="text"
              placeholder='Escribe aqui tu direccion'
              onChange={handleChange}
              value={formValues.address}
            />

            <label htmlFor="text">Mensaje</label>
            <textarea
              name="text"
              type="text"
              placeholder='Cuentanos sobre tu consulta...'
              onChange={handleChange}
              value={formValues.text}
            />
            <input type="submit" />
          </form>
        </section>)
        : (
          <section>
            <h2>Email Enviado!</h2>
            <h3>Nos pondremos en contacto contigo lo antes posible</h3>
          </section>
        )
      }
    </div>
  )
}

export default Contact