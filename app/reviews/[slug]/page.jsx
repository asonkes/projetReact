import Heading from "@/components/Heading"
import { getReview, getSlugs } from "@/lib/review"


export async function generateStaticParams() {
    const slugs = await getSlugs()
    return slugs.map((slug) => ({slug}))
}

export default async function ReviewPage({params: {slug}})
{
   const review = await getReview(slug)


    return (
        <>
            <Heading>{review.title}</Heading>
            <p className="italic pb-2">{review.date}</p>
            <img src={review.image} alt={`image de ${review.title}`} className="mb-4 rounded w-screen mx-auto"/>
            <article dangerouslySetInnerHTML={{__html: review.body}} className="prose lg:prose-xl"/>
        </>
    )
}