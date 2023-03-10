import React from 'react'
import Image from 'next/image'

const Class = () => {
    return(
        <div className='relative flex justify-center mb-10'>
            <Image
            src='https://document-export.canva.com/pHQP8/DAFW8ZpHQP8/80/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230309%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230309T194641Z&X-Amz-Expires=36063&X-Amz-Signature=870c4717d61d49bcce2e65ddf8b21ce9a6b4588c69ea194ff684dc5e9432f760&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2010%20Mar%202023%2005%3A47%3A44%20GMT'
            alt='/'
            width={500}
            height={700}
            />
        </div>
    )
}

export default Class