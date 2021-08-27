import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
  const { featuredImage,  title, texteArticle } = article.fields
  return (
    <div>
      <div className="header_image">
        <h1>{title}</h1>
        <Image className='thumbnail'
          src={`http:${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
        <p>
          { documentToReactComponents(texteArticle) }
        </p>
      </div>
    </div>
  )
}