
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
            <div className="article_infos">
              <div className='content'>
                  <h4>{title}</h4>
              </div>
              <div className='action'>
                  <Link href={`/articles/${slug}`}><a className="link link--io">vers l'article</a></Link>
              </div>
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
                    transition: 0.2s ease-out;
                }
                .thumbnail:hover{
                  transform:scale(1.03);
                  transition: 0.3s ease-in;
                }
                
                h4{
                  margin-top:0.2em;
                  margin-bottom:0.4em;
                  font-size:1.3em;
                }
                @media only screen and (max-width: 800px) {
                    .article_container{
                      width:90%;
                      align-items: center;
                    }
                }
                .link{
                  cursor: pointer; 
                  text-decoration:none;
                  color:black;
                  position: relative;
                }
                .link::before,
                .link::after {
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    background: black;
                    top: 100%;
                    left: 0;
                    pointer-events: none;
                }
                .link::before {
                  content: '';
                }
                .link--io::before {
                  transform-origin: 100% 50%;
                  transform: scale3d(0, 1, 1);
                  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
                }
                .link--io:hover::before {
                  transform-origin: 0% 50%;
                  transform: scale3d(1, 1, 1);
                  transition-timing-function: cubic-bezier(0.4, 1, 0.8, 1);
                }
                .link--io::after {
                  content: '';
                  top: calc(100% + 4px);
                  transform-origin: 0% 50%;
                  transform: scale3d(0, 1, 1);
                  transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
                 }
                .link--io:hover::after {
                    transform-origin: 100% 50%;
                    transform: scale3d(1, 1, 1);
                    transition-timing-function: cubic-bezier(0.4, 1, 0.8, 1);
                }
                
            `}</style>
        </div>
    )
}
