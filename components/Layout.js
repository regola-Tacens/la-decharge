import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <div className="upper__footer"></div>
        <div className="lower__footer">
          <h3 className="lower__footer-title">La Décharge</h3>
          <p>
            {" "}
            développé avec Next.js -- alimenté avec Contenful -- powered by
            Vercel
          </p>
        </div>
      </footer>
      <style JSX>{`
                .lower__footer-title{
                  color :var(--green-color);
                }
            
            `}</style>
    </div>
  );
}
