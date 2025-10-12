import React from 'react'
import {Fira_Sans_Extra_Condensed} from 'next/font/google'
import Image from 'next/image'


const fira = Fira_Sans_Extra_Condensed({
    subsets:['latin'],
    weight:['500'],
  })

const Hero = ({heading, message, message1, message2, frame, hidden, image, hidden1}) => {
    return (
        <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
            {/*OverLay*/}
            <div className= 'absolute top-0 left-0 right-0 bottom-0 bg-black/80 '/>
            <div className='mt-20 p-5 text-white z-[2]'>
                <h2 className='text-2xl'>{heading}</h2>
                <p className={fira.className}>{message}<br/>{message1}<br/>{message2} </p>
                <Image hidden={hidden1} src={image} className='m-auto w-full md:w-96 lg:w-[1000px] rounded-lg'/>
                <iframe hidden={hidden} src={frame} className='m-auto w-full h-96 mt-10 rounded-lg'/>
            </div>
        </div>
    )
}

export default Hero