import React, { Fragment, useEffect, useState} from 'react'
import { db } from '../../config/firebase'
import { getDocs, collection } from 'firebase/firestore'

function Basic() {
    const [basicList, setBasicList] = useState([])
    const basicCollectionRef = collection(db, "Basic")

    const [videoShown, setVideoShown] = useState('')
    const toggleVideo = (id) => {
        setVideoShown(prevVideoShown => ({
            ...prevVideoShown,
            [id]: !prevVideoShown[id]
        }))
    }

    useEffect(() => {
        const getBasicList = async () => {
            try {
                const data = await getDocs(basicCollectionRef)
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                id: doc.id,
            }))
                setBasicList(filteredData)
            } catch (error) {
                console.error(err)
            }

        }
        getBasicList()
    }, [])

    return (
        <Fragment>
        <div className="bg-gradient-to-r from-black">
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            {basicList
            .map((basic) => (
                <div key={basic} > 
                    {basic.Front?(
                        <button className="w-full p-1" onClick={() => toggleVideo(basic.id)}>
                            <div className="border p-4 bg-neutral-800 text-white">
                            <h1 className="text-2xl">{basic.Name}</h1>
                            <p>Type - {basic.Type}</p>
                            </div>
                        </button>
                    ) : null}
                    {videoShown[basic.id] ? <video className="border" loop autoPlay muted controls src={basic.Front}></video> : null}
                </div>
            ))} 
        </div>
        </div>
        </Fragment>
    )
}

export default Basic

 