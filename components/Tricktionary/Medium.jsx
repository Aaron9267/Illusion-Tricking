import React, { Fragment, useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import { getDocs, collection } from 'firebase/firestore'

function Medium() {
    const [mediumList, setMediumList] = useState([])
    const mediumCollectionRef = collection(db, "Medium")

    const [videoShown, setVideoShown] = useState('')
    const toggleVideo = (id) => {
        setVideoShown(prevVideoShown => ({
            ...prevVideoShown,
            [id]: !prevVideoShown[id]
        }))
    }

    useEffect(() => {
        const getMediumList = async () => {
            try {
                const data = await getDocs(mediumCollectionRef)
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                id: doc.id,
            }))
                setMediumList(filteredData)
            } catch (error) {
                console.error(err)
            }

        }
        getMediumList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
        <div className="bg-gradient-to-r from-black">
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            {mediumList
            .map((medium) => (
                <div key={medium}> 
                    {medium.Front?(
                        <button className='w-full p-1' onClick={() => toggleVideo(medium.id)}>
                            <div className="border p-4 bg-neutral-800 text-white">
                            <h1 className="text-2xl">{medium.Name}</h1>
                            <p>Type - {medium.Type}</p>
                            </div>
                        </button>
                    ) : null}
                    {videoShown[medium.id] ? <video className="border" loop autoPlay muted controls src={medium.Front}></video> : null}
                </div>
            ))} 
        </div>
        </div>
        </Fragment>
    )
}

export default Medium
