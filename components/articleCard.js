
import Link from 'next/link'
import Image from 'next/image'


export default function ArticleCard({article}) {
    const { title, slug, thumbnail, texteArticle } = article.fields

    return (
        <div className="article_container">
            <div >
                <Image className='thumbnail'
                src={`http:${thumbnail.fields.file.url}`}
                width={thumbnail.fields.file.details.image.width}
                height={thumbnail.fields.file.details.image.height}
                />
            </div>
            <div className='content'>
                <h4>{title}</h4>
                {/* <p>{texteArticle}</p> */}
            </div>
            <div className='action'>
                <Link href={`/articles/${slug}`}><a>vers l'article</a></Link>
            </div>

            <style JSX>{`
                .article_container{
                    padding:5%;
                    width : 40%;
                    display : flex;
                    flex-direction: column;  
                }
                .thumbnail{
                    width:50%;
                    object-fit : contain;
                }
                @media only screen and (max-width: 800px) {
                    .article_container{
                      width:90%;
                      align-items: center;
                    }
                  }
                
            `}</style>
        </div>
    )
}
