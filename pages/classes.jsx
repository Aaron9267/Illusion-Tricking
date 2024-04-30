import React from 'react'
import Class from '../components/Class'
import Hero from '../components/Hero'
import Instagram from '../components/Instagram'

const classes = () => {
    return (
        <div>
            <Hero 
            heading='Classes' 
            message='For term 2 we will be adding a class on Thursdays. Friday class is run at Gym Junkie.' 
            message1='!! There will be no classes running on 4th/31st May or 27th June - 2nd May !!'
            message2='Go to contact to enroll. Timetable and prices are below.'
            frame='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12113.28797635662!2d175.2732981!3d-40.6227804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d40f3c0a249b621%3A0x26a007b65b89dbfd!2sIllusion%20Tricking!5e0!3m2!1sen!2snz!4v1706745810973!5m2!1sen!2snz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade' 
            />
            <Class />
            <Instagram />
        </div>
        
    )
}

export default classes