import { createClient } from 'contentful'

const client = createClient({
  space : process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY ,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({
      content_type :'article'
    })

    const paths = res.items.map(item => {
      return {
        params:{ slug : item.fields.slug}
      }
    })

    return {
      paths:paths,
      fallback :false
    }
}

export async function getStaticProps ( { params }){

    const { items } = await client.getEntries({
        content_type :'article',
        'fields.slug' : params.slug
    })

    return {
      props : { article : items[0]}
    }
}



export default function DetailArticle( { article }) {
  console.log(article)
  return (
    <div>
      Article
    </div>
  )
}