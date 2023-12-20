import {writeFileSync} from 'node:fs'
import qs from 'qs'

// populate permet de faire un lien avec l'image, si on l'enlève, on n'aura pas l'image avec le body, il ne fera pas le lien avec...
//const url = "http://localhost:1337/api/reviews" + '?populate=*'
const url = "http://localhost:1337/api/reviews" + '?' + qs.stringify({
    filters: {slug: {seq: 'diablo-4'}},    
    fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
    populate: {image: {fields: ['url']}},
    sort: ['publishedAt:desc'],
    pagination: {pageSize: 1, widthCount: false}
}, {encodeValuesOnly: true})

// Ce que le fetch me donne 
// fetch est une "promesse"
const response = await fetch(url)

// Je le transforme en "json"
const body = await response.json()
console.log(body)
console.log(JSON.stringify(body, null, 2))

const formatted = JSON.stringify(body, null, 2)
const file = 'scripts/strapi-response.json'

writeFileSync(file, formatted, 'utf8')




