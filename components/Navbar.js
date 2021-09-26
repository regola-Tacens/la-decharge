import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

const Navbar = () => {
const [isBurgerOpen, setBurgerOpen] = useState(false);

const handleOpenBurgerMenu = () => {
  setBurgerOpen(!isBurgerOpen);
  console.log(isBurgerOpen);

}
  return (
    <nav className="header__nav">
      <div className="header">
        <div className="left">
          <Image
            className="header_logo"
            src="/reuse.png"
            width={55}
            height={55}
          />
          <Link href="/">
            <a>
              <h1 className="header_title">la Décharge</h1>
            </a>
          </Link>
        </div>
        <div className="right">
          <Link href="/proprio">
            <a className="menulink menulink-mneme">le proprio</a>
          </Link>
          <Link href="/">
            <a className="menulink menulink-mneme">les voisins</a>
          </Link>
          <div className="burger" onClick={handleOpenBurgerMenu}>
            <div className="burger__btn"></div>
            <div className={isBurgerOpen ? "burger__background burger--open":"burger__background"}>
              <Link className="burger__link" href="/proprio">Le Proprio</Link>
              <Link className="burger__link"  href="/">Les voisins</Link>
            </div>
          </div>
        </div>
      </div>
      <style JSX>{`
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
    </nav>
  );
};

export default Navbar;
