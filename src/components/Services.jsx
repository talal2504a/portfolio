import { useEffect, useRef } from 'react'
import './Services.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Website Design & Development',
    desc: 'Get a unique website built by a hybrid designer-developer. I combine modern aesthetics with robust coding and advanced SEO to create a fast, sales-focused digital experience.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/>
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'Elevate your user experience. I design intuitive, high-converting interfaces for web and mobile apps that strengthen your brand value.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Strategic Consultations',
    desc: 'Get clarity on your next digital move. Whether it\'s a website audit, a redesign roadmap, or brainstorming custom AI workflows, I provide actionable insights tailored to your goals.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'AI Automations',
    desc: 'Streamline your operations. I build custom AI chatbots and smart n8n workflows to automate your marketing and repetitive tasks.'
  }
]

export default function Services() {
  const cardsRef = useRef([])

  useEffect(() => {
    const onScroll = () => {
      cardsRef.current.forEach(card => {
        if (!card) return
        const rect = card.getBoundingClientRect()
        const center = window.innerHeight / 2
        const distance = rect.top + rect.height / 2 - center
        const rotate = distance * 0.012 // More subtle
        card.style.transform = `perspective(1000px) rotateX(${rotate}deg)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="services-header">
          <h2 className="section-heading reveal" ref={el => cardsRef.current.push(el)}>
            How I Can Help Your Business
          </h2>
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

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="svc-card"
              ref={el => cardsRef.current[i] = el}>
              <div className="svc-top">
                <span className="svc-icon">{s.icon}</span>
                <h3 className="svc-title">{s.title}</h3>
              </div>
              <p className="svc-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
