import Link from "next/link"
import './globals.css'
import NavBar from "@/components/NavBar"
import { orbitron, exo2 } from "./fonts"

export default function RootLayout({children}){
    return (
        /** Pas oublier de notifier ici, les différentes classes des fonts, au sinon, elles ne s'importe pas. */
        <html lang="fr" className={`${orbitron.variable} ${exo2.variable}`}>
            <body className="flex flex-col px-4 py-2 min-h-screen bg-white">
                <header>
                    <NavBar />
                </header>
                <main className="grow py-3 w-full mx-auto lg:w-10/12 px-6 lg:px-8">
                 {children}
                </main>
                <footer className="text-center text-xs border-t py-3">
                    footer
                </footer>
            </body>
        </html>
    )
}