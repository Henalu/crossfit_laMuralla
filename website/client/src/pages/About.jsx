import React, { useEffect, useState } from 'react'
import TeamMemberInfo from '../components/TeamMemberInfo'
// Services
import { getFounders, getStaff } from '../services/api'
// IMG and ICONS
import { AiOutlineInstagram } from 'react-icons/ai'
import crossfitComp from '../img/crossfit-comp.jpg'
import weightlifting from '../img/weightlifting.jpg'
import wallball from '../img/wall-ball.jpg'
import gimnastics from '../img/gimnastics.jpg'
import pushuprow from '../img/pushuprow.jpg'
import backmuscles from '../img/backmuscles.jpg'

const About = () => {
  const [expandInfo, setExpandInfo] = useState(false)
  const [staff, setStaff] = useState([])
  const [founders, setFounders] = useState([])
  const [id, setId] = useState(String)
  const images = {
    wallball,
    pushuprow,
    gimnastics,
    weightlifting,
    backmuscles
  }

  const loadStaff = async () => {
    const data = await getStaff()
    setStaff(data)
  }
  const loadFounders = async () => {
    const data = await getFounders()
    setFounders(data)
  }

  useEffect(() => {
    loadStaff()
    loadFounders()
  }, [])

  const handleClick = (memberId) => {
    setExpandInfo(true)
    setId(memberId)
  }

  return (
    <div className='about'>
      <div className='img-container' style={{ backgroundImage: `url(${crossfitComp})` }}>
        <div className='layer'>
          <h1>El Equipo</h1>
        </div>
      </div>

      <section className='members-container'>
        <div className='team-container'>
          <h2>Fundadores</h2>
          <div className='founders'>
            {
              founders.map((member, index) => {
                return (
                  <div key={member._id} className='member' >
                    <div
                      onClick={e => { handleClick(member._id) }}
                      className='profile-img'
                      style={{ backgroundImage: `url(${images[member.img_url]})` }}>
                    </div>
                    <h3>{member.first_name} {member.last_name}</h3>
                    <div className='personal-social-media'>
                      <a href={member.social_media_url} target='_blank' rel="noreferrer" >
                        <AiOutlineInstagram />
                      </a>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>

        <div className='team-container'>
          <h2>Entrenadores</h2>
          <div className='workers'>
            {
              staff.map((member, index) => {
                return (
                  <div key={member._id} className='member' >
                    <div
                      onClick={e => { handleClick(member._id) }}
                      className='profile-img'
                      style={{ backgroundImage: `url(${images[member.img_url]})` }}>
                    </div>
                    <h3>{member.first_name} {member.last_name}</h3>
                    <div className='personal-social-media'>
                      <a href={member.social_media_url} target='_blank' rel="noreferrer" >
                        <AiOutlineInstagram />
                      </a>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
      {expandInfo && <TeamMemberInfo images={images} staff={staff} founders={founders} id={id} setExpandInfo={setExpandInfo} />}
    </div>
  )
}

export default About
