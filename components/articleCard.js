
import Link from 'next/link'
import Image from 'next/image'


export default function ArticleCard({article}) {
    const { title, slug, thumbnail, texteArticle } = article.fields

    return (
        <>
            <div className='thumbnail'>
                <Image 
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
        </>
    )
}
