import React from 'react'
import Class from '../components/Class'
import Hero from '../components/Hero'
import Instagram from '../components/Instagram'

const classes = () => {
    return (
        <div>
            <Hero 
            heading='Classes' 
            message='For Term 4 we are introducing a Saturday Seekers class for ages under 5 to attend with a caregiver' 
            message1='Timetable and prices for Term 4 below.'
            message2='Go to contact to enroll or message us on facebook.'
            frame='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12113.28797635662!2d175.2732981!3d-40.6227804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d40f3c0a249b621%3A0x26a007b65b89dbfd!2sIllusion%20Tricking!5e0!3m2!1sen!2snz!4v1706745810973!5m2!1sen!2snz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade' 
            />
            <Class />
            <Instagram />
        </div>
        
    )
}

export default classes