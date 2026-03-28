import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const nameRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (nameRef.current) {
        nameRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero" id="home">
      {/* Full-bleed background portrait */}
      <div className="hero-bg">
        <img src="/hero.jpg" alt="Portrait" className="hero-bg-img" />
        <div className="hero-overlay" />
      </div>

      {/* Text content */}
      <div className="hero-content">
        <h1 className="hero-heading">
          I design and build high<br />
          converting websites and save<br />
          your time with AI automations
        </h1>
        <a href="#contact" className="btn-pill"
          onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
          Start Your Project
          <span className="btn-arrow">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </a>
      </div>

      {/* Giant name */}
      <div className="hero-name" ref={nameRef}>𝖙𝖆𝖑𝖆𝖑 𝖋𝖆𝖗𝖔𝖔𝖖</div>
    </section>
  )
}
