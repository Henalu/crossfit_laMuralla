import React, { useRef, useState, useEffect } from 'react'

const TeamMemberInfo = ({ images, staff, founders, id, setExpandInfo }) => {

    const ref = useRef(null);
    const [teamMember, setTeamMember] = useState({})

    useEffect(() => {
        staff.map((member) => {
            if (member._id === id) {
                setTeamMember(member)
            }
        })
        founders.map((member) => {
            if (member._id === id) {
                setTeamMember(member)
            }
        })
    }, [])

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setExpandInfo(false)
        }
    }
    return (
        <div className='team-member-info'>
            <div className='layer'>
                <div className='info' ref={ref} tabIndex={1} onKeyDown={e => handleKeyDown(e)}>
                    <div className='img-container' style={{ backgroundImage: `url(${images[teamMember.img_url]})` }}>
                        <div className='close-modal' onClick={e => setExpandInfo(false)}>X</div>
                    </div>
                    <article>
                        <h2>{teamMember.first_name} {teamMember.last_name}</h2>
                        <h3>Bio</h3>
                        <p>{teamMember.bio}</p>

                        <h3>Experiencia</h3>
                        <p>{teamMember.experience}</p>
                    </article>
                    {/* <div className='certifications-icons'>Imagenes de titulaciones</div> */}
                </div>
            </div>
        </div>
    )
}

export default TeamMemberInfo
