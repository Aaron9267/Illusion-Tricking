import React, { useEffect, useState } from 'react'
import { db } from '../../config/firebase'
import { getDocs, collection } from 'firebase/firestore'

function Basic() {
    const [basicList, setBasicList] = useState([])

    const basicCollectionRef = collection(db, "Basic")

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
        <div className="justify-center items-center bg-gradient-to-r from-black">
        <div className='text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            {basicList
            .sort((a,b) => a.Type > b.Type ? 1 : -1)
            .map((basic) => (
                <div key={basic} className="bg-neutral-800 text-white"> 
                    <h1>{basic.Name}</h1>
                    <p>Type - {basic.Type}</p>
                    <video controls src={basic.Front}></video>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Basic

 