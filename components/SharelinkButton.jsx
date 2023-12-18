'use client'
import {useState} from'react'

export default function SharelinkButton() {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {

    }

    return (
        <button className='border px-2 py-1 my-3 rounded text-slate-500 text-sm hover:bg-orange-300 hover:text-slate-700'>
            {clicked ? 'Link copied' : 'Share link'}
        </button>
    )
}