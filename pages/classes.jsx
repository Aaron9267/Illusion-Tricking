import React from 'react'
import Class from '../components/Class'
import Hero from '../components/Hero'
import Instagram from '../components/Instagram'

const classes = () => {
    return (
        <div>
            <Hero heading='Classes' message='Timetable below. Go to contact to enroll. $100 per term or $10 for casual session' />
            <Class />
            <Instagram />
        </div>
        
    )
}

export default classes