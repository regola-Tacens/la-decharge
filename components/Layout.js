import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <nav>
          <div className="header">
            <h1>la Décharge</h1>
            <div className="right">
              <Link href="/"><a>le proprio</a></Link>
              <Link href="/"><a>les voisins</a></Link>
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
          <p>plan site</p>
        </div>
      </footer>
    </div>
  )
}