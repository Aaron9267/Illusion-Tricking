import React from 'react'
import Hero from '../components/Hero'
import Basic from '../components/Tricktionary/Basic'
import Easy from '../components/Tricktionary/Easy'
import Medium from '../components/Tricktionary/Medium'

const tricktionary = () => {
    return(
        <div>
            <Hero 
            heading='Tricktionary' 
            message='Below is a list of tricks. Click on one to see what it looks like. See if you can master them all!'
            hidden
            hidden1
            />
            <h1 className="flex justify-center text-2xl p-4">Basic</h1>
            <Basic />
            <h1 className="flex justify-center text-2xl p-4">Easy</h1>
            <Easy />
            <h1 className="flex justify-center text-2xl p-4">Medium</h1>
            <Medium />
        </div>
    )
}

export default tricktionary