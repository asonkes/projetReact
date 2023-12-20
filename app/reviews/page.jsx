import Link from 'next/link'
import Heading from '@/components/Heading'
import { getReviews } from '@/lib/review'
import Image from 'next/image'

export const metadata = {
    title: "Reviews"
}

export default async function ReviewsPage() 
{
    const reviews = await getReviews(8)
    //console.log("[ReviewsPage]", reviews)

    return (
        <>
            <Heading>Reviews</Heading>
            <p>Here we&apos;ll list all the reviews</p>
            
            <ul className='flex flex-col gap-3'>
                {reviews.map((review) => (

                    <li key={review.slug} className='border rounded shadow hover:shadow-xl w-80 bg-slate-50'>
                        <Link href={`/reviews/${review.slug}`}>
                            <Image width="380" height="180" src={review.image} alt={`ìmage de ${review.title}`} className='rounded-t' />
                            <h2 className='font-orbitron font-semibold py-1 text-center'>{review.title}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}