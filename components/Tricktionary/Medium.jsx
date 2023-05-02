import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import { getDocs, collection } from 'firebase/firestore'

function Medium() {
    const [mediumList, setMediumList] = useState([])

    const mediumCollectionRef = collection(db, "Medium")

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
    }, [])

    return (
        <div className="justify-center items-center bg-gradient-to-r from-black">
        <div className='text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            {mediumList
            .sort((a,b) => a.Type > b.Type ? 1 : -1)
            .map((medium) => (
                <div key={medium} className="bg-neutral-800 text-white"> 
                    <h1>{medium.Name}</h1>
                    <p>Type - {medium.Type}</p>
                    <video controls src={medium.Front}></video>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Medium
