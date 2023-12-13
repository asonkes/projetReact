import Heading from "@/components/Heading"
import Link from 'next/link'
import { getFeatureReview } from "@/lib/review"

export default async function HomePage() {
    console.log("HomePage [Reading]")
    const review = await getFeatureReview()
    return (
        <>
            <Heading>My Games</Heading>
            <p>
                Only the best games, reviewed for you.
            </p>
            <div className="border rounded shadow hover:shadow-xl w-80 bg-slate-50 sm:w-full">
                <Link href={`/reviews/${review.slug}`} className="flex flex-col sm:flex-row">
                    <img src={review.image} alt={`image de ${review.title}`} className="rounded-t sm:rounded-l sm:rounded-r-none" width="320" height="180" />
                    <h2 className="font-orbitron font-semibold py-1 sm:px-2 w-full flex items-center justify-center">{review.title}</h2>
                </Link>
            </div>
        
        </>
    )
}