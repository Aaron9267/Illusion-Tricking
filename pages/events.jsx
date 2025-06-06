import React from 'react'
import Hero from '../components/Hero'
import Instagram from '../components/Instagram'
import sleepover from '../public/sleepover.jpg'
import Event from '../components/Event'

const events = () => {
    return (
        <div>
            <Hero 
            heading='Sleepover' 
            message='We will be running a gym sleepover as a fundraiser for Theo Hunt who has been selected to represent NZ in Muay Thai.' 
            message1='The funds are going towards his trip to Abu Dhabi where he will be fighting on the world stage. '
            message2='Fill in the form below to sign up.'
            image = {sleepover} 
            hidden='hidden'
            />
            <Event/>
            <Instagram />
        </div>
        
    )
}

export default events