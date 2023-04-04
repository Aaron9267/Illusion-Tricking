import React from 'react'
import {Fira_Sans_Extra_Condensed} from 'next/font/google'


const fira = Fira_Sans_Extra_Condensed({
    subsets:['latin'],
    weight:['500'],
  })

const Hero = ({heading, message, message1, frame}) => {
    return (
        <div className='flex items-center justify-center h-screen bg-fixed 
        bg-center bg-cover custom-img'>
            {/*OverLay*/}
            <div className= 'absolute top-0 left-0 right-0 bottom-0 bg-black/80 '/>
            <div className='p-5 text-white z-[2]'>
                <h2 className='text-2xl'>{heading}</h2>
                <p className={fira.className}>{message}<br/>{message1} </p>
                <iframe height='300' className='m-auto w-full mt-20' src={frame}></iframe>
            </div>
        </div>
    )
}

export default Hero