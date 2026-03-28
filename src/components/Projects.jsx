import { useEffect, useRef } from 'react'
import './Projects.css'

const projects = [
  { img: '/proj1.png', name: 'RGM Partners', tags: 'Recruit · Grow · Manage', bgText: 'RGM PARTNERS' },
  { img: '/proj2.png', name: 'Filmbros', tags: 'Animations · Design · Development', bgText: 'FILMBROS' },
  { img: '/proj3.png', name: 'Sama Cape Town', tags: 'Real Estate · Hospitality', bgText: 'SAMA CAPE TOWN' },
]

function ProjectItem({ project }) {
  const bgRef = useRef(null)
  const cardRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current || !bgRef.current || !cardRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const scrollY = window.scrollY
      const center = window.innerHeight / 2
      
      // Calculate rotation for the card (3D effect)
      const cardCenter = rect.top + rect.height / 2
      const distance = cardCenter - center
      const rotate = distance * 0.015 // More subtle
      cardRef.current.style.transform = `perspective(1200px) rotateX(${rotate}deg) rotateY(${rotate * 0.15}deg)`

      // Calculate translation for background text (Parallax)
      // Moving left based on section scroll depth
      const offset = (rect.top - window.innerHeight) * 0.4
      bgRef.current.style.transform = `translateX(${offset}px)`
    }
    
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // Init
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="project-item" ref={containerRef}>
      <div className="project-bg-text" ref={bgRef}>{project.bgText}</div>
      <div className="project-card-wrap">
        <div className="project-card" ref={cardRef}>
          <img src={project.img} alt={project.name} className="project-img" />
          <div className="project-bar">
            <div>
              <div className="proj-name">{project.name}</div>
              <div className="proj-tags">{project.tags}</div>
            </div>
            <button className="btn-circle" aria-label="View Project">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="proj-section" id="projects">
      <h2 className="proj-heading">Recent Projects</h2>
      {projects.map((p, i) => <ProjectItem key={i} project={p} />)}
    </section>
  )
}
