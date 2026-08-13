import { useEffect, useState } from 'react'
import './App.css'

import smash from './assets/smash.avif'
import smashlogo from './assets/smashlogo.png'
import smashinferno from './assets/smashinferno.avif'
import smashsalada from './assets/smashsalada.avif'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* ----------------------------- HEADER ------------------------------ */}

      <header>
        <section className={`navbar ${scrolled ? 'scrolled' : ''}`}>

          <div className="navbar-logo">
            <img src={smashlogo} alt="Logo" />
            <h1>
              SMASH <span>&</span> CO.
            </h1>
          </div>

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

        <section className="hero">

          <div className="hero-content">

            <h1>
              Aberto agora · Feito na hora
            </h1>

          </div>

          <h1 id="hero-title">
            BURGUERS <span> ARTESANAIS</span>.
          </h1>

          <p id="hero-subtitle">
            Cada burger feito à mão, prensado na chapa quente e servido em 8 minutos. Sem
            frescura. Só sabor de verdade.
          </p>

          <div className="hero-content-btn">

            <button id='ver-cardapio'>Ver cardápio</button>

            <button id='promocoes'>Promoções</button>

          </div>

        </section>

        <section className="menu">

          <div className="menu-content-text">

            <div id="menu-title">
              <h1>Burguers <span> impressionantes</span></h1>
            </div>

            <div id="menu-subtitle">
              <p>Ingredientes selecionados. Carne bovina 100% pura,
                pão brioche artesanal, molhos autorais.</p>
            </div>

          </div>

          <div className="menu-content-burguers">

            <div className="menu-content-burguers-card">
              <div className="menu-content-burguers-card-img">
                <img src={smash} alt="" />
              </div>
              <h1>Smash clássico</h1>
              <p>Smash duplo de frango, queijo americano, molho especial, alface e tomate.</p>
              <h2>R$32</h2>
            </div>

            <div className="menu-content-burguers-card">
              <div className="menu-content-burguers-card-img">
                <img src={smashinferno} alt="" />
              </div>
              <h1>Smash picante</h1>
              <p>Smash duplo bovino, queijo americano, bacon, pimenta e picles.</p>
              <h2>R$36</h2>
            </div>

            <div className="menu-content-burguers-card">
              <div className="menu-content-burguers-card-img">
                <img src={smashsalada} alt="" />
                <h1>Smash salada</h1>
                <p>Smash bovino, queijo americano, ketchup, alface, tomate e picles.</p>
                <h2>R$28</h2>
              </div>
            </div>

          </div>

        </section>

        <section className='promocoes'>
          <p>Ofertas especiais</p>
          <h1>PROMOÇÕES <span> QUE VALEM.</span></h1>

          <div className='promocoes-container'>
            
            <div className='promocoes-container-card'>

            </div>

            <div className='promocoes-container-card'>

            </div>

            <div className='promocoes-container-card'>

            </div>

          </div>

        </section>

      </main>
    </>
  )
}

export default App