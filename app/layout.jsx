import Link from "next/link"
import './globals.css'
import { orbitron, exo2 } from "./fonts"
import NavBar from "@/components/NavBar"

export const metadata = {
    title: {
        default: 'Game',
        template: '%s | Game'
    },
    description: 'Only the best games, reviewed for you'
}

export default function RootLayout({children}) {
    return (
        <html lang="fr" className={`${exo2.variable} ${orbitron.variable}`}>
            <body className="flex flex-col min-h-screen bg-white">
                <header>
                   <NavBar />
                </header>
                <main className="grow py-3 w-full mx-auto lg:w-10/12 px-6 lg:px-8">
                    {children}
                </main>
                <footer className="text-center text-xs border-t py-3">
                    Game data and images courtesy of <a href="https://rawg.io/" target="_blank" className="text-orange-800 hover:underline">RAWG</a>
                </footer>
            </body>
        </html>
    )
}