import { marked } from "marked";
import qs from 'qs'

const CMS_URL = 'http://localhost:1337'

// permet de donner la dernière review pour la passe en annonce
export async function getFeatureReview() {
    const reviews = await getReviews()
    return reviews[0]
}

export async function getReview(slug) {
   const {data} = await fetchReviews({
    filters: {slug: { $eq: slug}},
    fields: ['slug', 'title', 'subtitle', 'publishedAt','body'],
    populate: { image: {fields: ['url']}},
    pagination: {pageSize: 1, withCount: false}
   })
   const item = data[0]
   return {
    ...toReview(item),
    body: marked(item.attributes.body)
   }

}

export async function getSlugs() {
    const { data } = await fetchReviews({
        fields: ['slug'],
        sort: ['publishedAt:desc'],
        pagination: {pageSize: 100}
    })
    return data.map((item)=> item.attributes.slug)
}

export async function getReviews(pageSize) {
    const {data} = await fetchReviews({
        fields: ['slug', 'title', 'subtitle', 'publishedAt'],
        populate: { image: {fields: ['url']}},
        sort : ['publishedAt:desc'],
        pagination: { pageSize}
    })
    return data.map(toReview)
}

async function fetchReviews(parameters)
{
    const url = `${CMS_URL}/api/reviews?` + qs.stringify(parameters, {encodeValuesOnly: true})
    console.log('fetchReviews: ', url)
    const response = await fetch(url)
    if(!response.ok)
    {
        throw new Error(`Le CMS retourne ${response.status} pour ${url}`)
    }
    return await response.json()
}

function toReview(item) {
    const { attributes } = item
    return {
        slug: attributes.slug,
        title: attributes.title,
        subtitle: attributes.subtitle,
        date: attributes.publishedAt.slice(0,'yyyy-mm-dd'.length),
        image: CMS_URL + attributes.image.data.attributes.url
    }
}