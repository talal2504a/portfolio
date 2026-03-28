import './Nav.css'

export default function Nav() {
  const links = ['Services', 'Projects', 'Process', 'Pricing', 'Contact']

  const handleClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <div className="nav-pill">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} 
            className={`nav-link ${l === 'Contact' ? 'nav-contact' : ''}`}
            onClick={e => handleClick(e, l)}>
            {l}
            {l === 'Contact' && (
              <span className="btn-arrow-xs">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                </svg>
              </span>
            )}
          </a>
        ))}
      </div>
    </nav>
  )
}
