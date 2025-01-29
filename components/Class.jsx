import React from 'react'
import Image from 'next/image'
import timetable from '../public/timetable.jpg'

const Class = () => {
    return(
        <div className='mx-auto bg-fixed bg-center bg-cover custom-img'>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/80 relative flex justify-center' >
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