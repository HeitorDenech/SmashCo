import { useEffect, useState } from 'react'
import './App.css'

import smash from './assets/smash.avif'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* ----------------------------- HEADER ------------------------------ */}

      <header>
        <section className={`navbar ${scrolled ? 'scrolled' : ''}`}>

          <h1>
            SMASH <span>&</span> CO.
          </h1>

          {/* BOTÃO HAMBÚRGUER */}

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* MENU */}

          <div className={`navbar-text ${menuOpen ? 'active' : ''}`}>
            <a href="#">Menu</a>
            <a href="#">Combos</a>
            <a href="#">Promoções</a>
            <a href="#">Sobre</a>
            <a href="#">Contato</a>
          </div>

          <div className="navbar-btn">
            <button>Pedir agora</button>
          </div>

        </section>
      </header>

      {/* ----------------------------- MAIN ------------------------------ */}

      <main>
        <section></section>
      </main>
    </>
  )
}

export default App