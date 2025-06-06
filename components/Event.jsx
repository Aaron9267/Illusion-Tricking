import React from 'react'
import Image from 'next/image'
import coc from '../public/coc.jpg'

const Event = () => {
    return(
        <div className='mx-auto bg-fixed bg-center bg-cover custom-img'>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/80 relative justify-center' >
                <div className='grid gap-8 md:grid-cols-2 md:items-center'>
                    <Image className='m-auto md:mr-4 w-64 md:w-[96] lg:w-[500px] rounded-lg' src={coc} ></Image>
                    <iframe className='m-auto md:ml-4 h-[500px] w-64 md:w-[96] lg:w-[500px]' src="https://docs.google.com/forms/d/e/1FAIpQLSeS5ZK3SWkNcENAkd-K2WChTbWAQhvenvehuT4uNlE6WuPG5g/viewform?embedded=true"/>
                </div>
            </div>
        </div>
    )
}

export default Event