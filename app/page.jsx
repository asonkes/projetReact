import Image from "next/image"
import Heading from "@/components/Heading"
import Link from "next/link"
import { getReviews } from "@/lib/review"



export default async function HomePage() {
    console.log('HomePage [Rending]')
    const reviews = await getReviews(3)
    return (
        <>
            <Heading>Games</Heading>
            <p>
                Only the best games, reviewed for you.
            </p>
            <ul className="flex flex-col gap-3 mt-5">
                {reviews.map((review) => (
                    <li key={review.slug} className="border rounded shadow hover:shadow-xl w-80 bg-slate-50 sm:w-full">
                        <Link href={`/reviews/${review.slug}`} className="flex flex-col sm:flex-row">
                            <Image src={review.image} alt={`image de ${review.title}`} className="rounded-t sm:rounded-l sm:rounded-r-none" width="320" height="180" />
                            <div className="px-2 py-1 text-center sm:text-left">
                                <h2 className="font-orbitron font-semibold">{review.title}</h2>
                                <p className="hidden pt-2 sm:block">{review.subtitle}</p>
                            </div>
                        </Link>
                    </li>        

                ))}
            </ul>
        </>
    )
}