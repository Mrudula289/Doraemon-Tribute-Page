import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          🤖 <span>Doraemon</span>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('.about-section')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('.maincharacters-section')} className="nav-link">Characters</button>
          <button onClick={() => scrollToSection('.gadget-section')} className="nav-link">Gadgets</button>
          <button onClick={() => scrollToSection('.gallery-section')} className="nav-link">Gallery</button>
          <button onClick={() => scrollToSection('.timeline-section')} className="nav-link">Timeline</button>
          <button onClick={() => scrollToSection('.funfacts-section')} className="nav-link">Fun Facts</button>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar