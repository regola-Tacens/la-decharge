import { createClient } from 'contentful'
import ArticleCard from '../components/articleCard'

export async function getStaticProps (){

  const client = createClient({
    space : process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY ,
  })

  const res = await client.getEntries({
    content_type: 'article'
  })

  return {
    props: {
      articles : res.items
    }
  }
}

export default function Articles( {articles}) {
  console.log(articles)
  return (
    <div className='article-list'>
      {articles.map(article => {
        return <ArticleCard article={article} key={article.sys.id}/>
      })}
    </div>
  )
}