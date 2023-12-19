import {writeFileSync} from 'node:fs'
import qs from 'qs'

// populate permet de faire un lien avec l'image, si on l'enlève, on n'aura pas l'image avec le body, il ne fera pas le lien avec...
//const url = "http://localhost:1337/api/reviews" + '?populate=*'
const url = "http://localhost:1337/api/reviews" + '?' + qs.stringify({
    fields: ['slug', 'title', 'subtitle', 'publishedAt'],
    populate: {image: {fields: ['url']}},
    sort: ['publishedAt:desc'],
    pagination: {pageSize: 6}
}, {encodeValuesOnly: true})

// Ce que le fetch me donne 
const response = await fetch(url)

// Je le transforme en "json"
const body = await response.json()
console.log(body)
console.log(JSON.stringify(body, null, 2))

const formatted = JSON.stringify(body, null, 2)
const file = 'scripts/strapi-response.json'

writeFileSync(file, formatted, 'utf8')




