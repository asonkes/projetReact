import {useState} from'react'

export default function SharelinkButton() {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        // Permet que lorsqu'on a cliqué, on fait ensuite une copier/coller et qd on va sur une autre page, il y a "test" qui s'affiche...
        //console.log(navigator)
        //navigator.clipboard.writeText('test')

        // Permet à la place de copier/coller "test", de copier/coller l'url du site...
        console.log(navigator)
        console.log(window)
        navigator.clipboard.writeText(window.location) //voir mdn

        // Permet que le texte au clique change et devienne "link copied"
        setClicked(true)
        // Permet pour le bouton "share link", qu'il revienne après 1500 secondes, le texte qd on clique, texte = link copied
        // Et le timeout, permet que qd on a cliqué, le texte redevienne "share link"
        setTimeout(() => setClicked(false), 1500)
    }

    return (
        <button onClick={handleClick} 
        className='border px-2 py-1 my-3 rounded text-slate-500 text-sm hover:bg-orange-300 hover:text-slate-700'
        >
            {clicked ? 'Link copied' : 'Share link'}
        </button>
    )
}