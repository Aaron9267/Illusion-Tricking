import React from 'react'
import Hero from '../components/Hero'
import Tricktionary from '../components/Tricktionary'

const tricktionary = () => {
    return(
        <div>
            <Hero 
            heading='Tricktionary' 
            message='Below is a list of tricks displayed with video. See if you can master them all!'
            hidden="hidden"
            />
            <Tricktionary />
        </div>
    )
}

export default tricktionary