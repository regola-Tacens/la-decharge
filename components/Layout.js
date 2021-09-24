import Link from 'next/link'
import Image from 'next/image'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <nav>
          <div className="header">
            <div className="left">
              <Image className="header_logo" src="/reuse.png" width={55} height={55} />
              <Link href="/"><a><h1 className="header_title">la Décharge</h1></a></Link>
            </div>
            <div className="right">
              <Link href="/proprio"><a className="menulink menulink-mneme">le proprio</a></Link>
              <Link href="/"><a className="menulink menulink-mneme">les voisins</a></Link>
            </div>
          </div>
        </nav>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <div className="upper__footer">
        </div>
        <div className="lower__footer">
          <h3 className="lower__footer-title">La Décharge</h3>
          <p> développé avec Next.js -- alimenté avec Contenful -- powered by Vercel</p>
        </div>
      </footer>
      <style JSX>{`
                .lower__footer-title{
                  color :var(--green-color);
                }
                .header_logo{
                  animation: rotation 10s infinite linear;
                }
                @keyframes rotation {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(359deg);
                  }
                }
                .header_title{
                  margin-left:1rem;
                }
                .menulink{
                  cursor: pointer; 
                  text-decoration:none;
                  color:black;
                  position: relative;
                }
                .menulink::before,
                .menulink::after {
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    background: black;
                    top: 100%;
                    left: 0;
                    pointer-events: none;
                }
                .menulink::before {
                  content: '';
                }
                .menulink-mneme {
                  font-family: aktiv-grotesk-extended, sans-serif;
                  font-size: 0.875rem;
                  text-transform: uppercase;
                }
              
                .menulink-mneme::before {
                    height: 100%;
                    top: 0;
                    opacity: 0;
                }
                .menulink-mneme:hover::before {
                  opacity: 1;
                  animation: coverUp 0.3s ease forwards;
                }
                @keyframes coverUp {
                  0% {
                      transform-origin: 50% 100%;
                      transform: scale3d(1, 0.045, 1);
                  }
              
                  50% {
                      transform-origin: 50% 100%;
                      transform: scale3d(1, 1, 1);
                  }
              
                  51% {
                      transform-origin: 50% 0%;
                      transform: scale3d(1, 1, 1);
                  }
              
                  100% {
                      transform-origin: 50% 0%;
                      transform: scale3d(1, 0.045, 1);
                  }
                }
                .menulink-mneme::after {
                  content: '';
                  transition: opacity 0.3s;
                }
              
                .menulink-mneme:hover::after {
                    opacity: 0;
                }
            `}</style>
    </div>
  )
}