// Permet de pouvoir afficher le titre... h1
// Ce fichier permet, que si on veut changer le fichier, on change simplement à la main...
export default function Heading({children}){
    return (
        <h1 className="font-bold font-orbitron pb-3 text-2xl">{children}</h1>
    )
}