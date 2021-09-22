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
    <div className="article">
      <div >
        <h1>{title}</h1>
        <Image className='thumbnail'
          src={`http:${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
        <p className="article__text">
          { documentToReactComponents(texteArticle) }
        </p>
      </div>
      <style JSX>{`
                .article{
                    width: 75%;
                    display: flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction: column;  
                }
                .thumbnail{
                    width:50%;
                    object-fit : contain;
                }
                .article__text{
                  white-space: pre-wrap;
                  padding: 1rem 3rem;
                }
              
                
            `}</style>
    </div>
    
  )
}