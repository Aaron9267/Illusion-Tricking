import React, { Fragment, useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import { getDocs, collection } from 'firebase/firestore'

function Easy() {
    const [easyList, setEasyList] = useState([])
    const easyCollectionRef = collection(db, "Easy")

    const [videoShown, setVideoShown] = useState('')
    const toggleVideo = (id) => {
        setVideoShown(prevVideoShown => ({
            ...prevVideoShown,
            [id]: !prevVideoShown[id]
        }))
    }

    useEffect(() => {
        const getEasyList = async () => {
            try {
                const data = await getDocs(easyCollectionRef)
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                id: doc.id,
            }))
                setEasyList(filteredData)
            } catch (error) {
                console.error(err)
            }

        }
        getEasyList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
        <div className="bg-gradient-to-r from-black">
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            {easyList
            .map((easy) => (
                <div key={easy}> 
                    {easy.Front?(
                        <button className='w-full p-1' onClick={() => toggleVideo(easy.id)}>
                            <div className="border p-4 bg-neutral-800 text-white">
                            <h1 className="text-2xl">{easy.Name}</h1>
                            <p>Type - {easy.Type}</p>
                            </div>
                        </button>
                    ) : null}
                    {videoShown[easy.id] ? <video className="border" loop autoPlay muted controls src={easy.Front}></video> : null}
                </div>
            ))} 
        </div>
        </div>
        </Fragment>
    )
}

export default Easy