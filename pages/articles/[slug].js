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
        <h1 className="article_title">{title}</h1>
        <Image className='thumbnail'
          src={`http:${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
        <p className="article__text">
          { documentToReactComponents(texteArticle) }
        </p>
     
      <style JSX>{`
                .article{
                  margin: 0 auto;
                    width: 100%;
                    // display: flex;
                    flex-wrap:wrap;
                    justify-content:center;
                    align-items:center;
                    flex-direction: column;  
                    box-sizing:border-box;
                }
                .thumbnail{
                    width:100%;
                    height:100%;
                    object-fit : contain;
                }
                .article_title{
                  width:95%;
                }
                .article__text{
                  box-sizing: border-box;
                  max-width: 1000px;
                  white-space: pre-wrap;
                  background-color: var(--light-color);
                  padding:1%;
                }
                code{
                  width:90%;
                }
              
                
            `}</style>
    </div>
    
  )
}