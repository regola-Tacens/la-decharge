import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <nav>
          <div className="header">
            <Link href="/"><a><h1>? la Décharge</h1></a></Link>
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
          <p> développé avec Next.js -- alimenté avec Contenful -- powered by Vercel</p>
        </div>
      </footer>
      <style JSX>{`
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