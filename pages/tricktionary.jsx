import React from 'react'
import Hero from '../components/Hero'
import Basic from '../components/Tricktionary/Basic'
import Easy from '../components/Tricktionary/Easy'

const tricktionary = () => {
    return(
        <div>
            <Hero 
            heading='Tricktionary' 
            message='Below is a list of tricks displayed with video. See if you can master them all!'
            hidden="hidden"
            />
            <h1 className="flex justify-center text-2xl p-4">Basic</h1>
            <Basic />
            <h1 className="flex justify-center text-2xl p-4">Easy</h1>
            <Easy />
        </div>
    )
}

export default tricktionary