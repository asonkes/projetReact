import Heading from "@/components/Heading"
import ShareButtons from "@/components/ShareButtons"
import { getReview, getSlugs } from "@/lib/review"
import Image from "next/image"


 export async function generateStaticParams() {
     const slugs = await getSlugs()
     return slugs.map((slug) => ({slug}))
 }

export async function generateMetadata(props) {
    const review = await getReview(props.params.slug)
    return {
        // c'est comme si, on demandait, tu retournes un "objet"
        // Exemple:
        // ==> const obj = {
        //    title: review.title
        // }
        // return obj
        title: review.title
        } 
    }

export default async function ReviewPage({params: {slug}})
{
   const review = await getReview(slug)

//<SharelinkButton/> ==> Le fait de l'indiquer en bas, permet de visualiser le bouton, et on voit le chnagement de couleur au survol...
    return (
        <>
            <Heading>{review.title}</Heading>

            <div className="flex gap-3 items-baseline">
            <p className="font-semibold pb-3">{review.date}</p>
            <ShareButtons/>
            </div>

            <Image width="380" height="380" src={review.image} alt={`image de ${review.title}`} className="mb-4 rounded w-screen mx-auto"/>
            <div className="w-full">
                <article dangerouslySetInnerHTML={{__html: review.body}} className="prose w-full max-w-none"/>
            </div>
        </>
    )
}