import React from 'react'
import Hero from '../components/Hero'
import Tricktionary from '../components/Tricktionary'

const tricktionary = () => {
    return(
        <div>
            <Hero 
            heading='Tricktionary' 
            message='Below is a list of tricks displayed with video. The goal is to eventually have the most extensive tricktionary in the world!'
            hidden="hidden"
            />
            <Tricktionary />
        </div>
    )
}

export default tricktionary