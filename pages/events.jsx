import React from 'react'
import Hero from '../components/Hero'
import Instagram from '../components/Instagram'
import sleepover from '../public/sleepover.jpg'
import Event from '../components/Event'

const events = () => {
    return (
        <div>
            <Hero 
            heading='Coming Soon' 
            message='We have an important announcment to kick off Term 4.' 
            message1=''
            message2=''
            hidden='hidden'
            />
            <Event/>
            <Instagram />
        </div>
        
    )
}

export default events