import React from 'react'
import Image from 'next/image'
import timetable from '../public/holidaytimetable.jpg'

const Class = () => {
    return(
        <div className='mx-auto p-4'>
            <div  className='relative flex justify-center'>
            <Image
            src={timetable}
            alt='/'
            width='1000'
            height='1000'
            objectFit='cover' 
            />
            </div>
        </div>
    )
}

export default Class