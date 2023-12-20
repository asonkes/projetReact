import { readdir, readFile } from 'node:fs/promises';
import { marked } from "marked";
import matter from "gray-matter";
import qs from 'qs';

const CMS_URL = 'http://localhost:1337';

// permet de donner la dernière review pour la passe en annonce
export async function getFeatureReview() {
    const reviews = await getReviews();
    return reviews[0];
}

export async function getReview(slug) {
    const url = `${CMS_URL}/api/reviews` + qs.stringify({
        filters: { slug: { $eq: slug } },
        fields: ['slug', 'title', 'subtitle', 'publichedAt', 'body'],
        populate: { image: { fields: ['url'] } },
        pagination: { pageSize: 1, widthCount: false }
    });

    const response = await fetch(url);
    const { data } = await response.json();
    const { attributes } = data[0];
    return {
        slug: attributes.slug,
        title: attributes.title,
        date: attributes.publishedAt.slice(0, 'yyy-mm-dd'.length),
        image: CMS_URL + attributes.image.data.attributes.url,
        body: marked(attributes.body)
    };
}

export async function getSlugs() {
    const files = await readdir('./content/reviews');
    return files.filter((file) => file.endsWith('.md')).map((file) => file.slice(0, -'.md'.length));
}

export async function getReviews() {
    const url = `${CMS_URL}/api/reviews?` + qs.stringify({
        fields: ['slug', 'title', 'subtitle', 'publishedAt'],
        populate: { image: { fields: ['url'] } },
        sort: ['publishedAt:desc'],
        pagination: { pageSize: 6 }
    }, { encodeValuesOnly: true });
    console.log('getReviews', url);
    const response = await fetch(url);
    const { data } = await response.json();
    return data.map(({ attributes }) => ({
        slug: attributes.slug,
        title: attributes.title,
        date: attributes.publishedAt.slice(0, 'yyy-mm-dd'.length),
        image: CMS_URL + attributes.image.data.attributes.url
    }))
}