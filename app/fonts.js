// Ici, on importe 2 types de "font" différentes 
import { Orbitron, Exo_2 } from 'next/font/google'

/** Là, ce sont des options, ici, on a mis l'option de la variable "orbitron" */
/** Donc ici, on passe au-dessus de tailwind, et on met nos propres fonts avec "next" */
export const orbitron = Orbitron(
    {
        subsets: ['latin'],
        variable: "--font-orbitron",
    }
)

export const exo2 = Exo_2({
    subsets: ['latin'],
    variable: "--font-exo2",
})