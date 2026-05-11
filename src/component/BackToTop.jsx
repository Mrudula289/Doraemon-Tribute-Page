import { useState, useEffect } from 'react'
import './BackToTop.css'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    setIsVisible(window.scrollY > 400)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      title="Back to top"
    >
      ↑
    </button>
  )
}

export default BackToTop