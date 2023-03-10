import React from 'react'
import IgImg1 from '../public/img-1.jpg'
import IgImg2 from '../public/img-2.jpg'
import IgImg3 from '../public/img-3.jpg'
import IgImg4 from '../public/img-4.jpg'
import IgImg5 from '../public/img-5.jpg'
import InstagramImg from './InstagramImg'

const Instagram = () => {
    return (
        <div className='max-w-[1240px] mx-auto text-center py24'>
            <p className='text-2xl font-bold'>Follow us on Instagram</p>
            <p className='pb-4'>@illusiontricking</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
                <InstagramImg socialImg={IgImg1} />
                <InstagramImg socialImg={IgImg2} />
                <InstagramImg socialImg={IgImg3} />
                <InstagramImg socialImg={IgImg4} />
                <InstagramImg socialImg={IgImg5} />
            </div>
        </div>
    )
}

export default Instagram