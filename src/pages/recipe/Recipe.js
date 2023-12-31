import './Recipe.css'

import { projectFirestore } from '../../firebase/config'

import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useEffect, useState } from 'react'

export default function Recipe(){

    const { id } = useParams()
    const { mode } = useTheme()

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect( () => {
        setIsPending(true)

        const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
            if (doc.exists) {
                setIsPending(false)
                setData(doc.data())
            }
            else{
                setIsPending(false)
                setError('Could not find that recipe')
            }
        })

        return () => unsub()

    }, [id])

    const handleClick = () => {
        projectFirestore.collection('recipes').doc(id).update({
            title: 'Something completrly different'
        })
    }

    return(
        <div className={`recipe ${mode}`}>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && (
                <>
                <h2 className='page-title'>{data.title}</h2>
                <p>Takes {data.cookingTime} to cook.</p>
                <ul>
                    {data.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                </ul>
                <p className='method'>{data.method}</p>
                </>
            )}
        </div>
    )
}
