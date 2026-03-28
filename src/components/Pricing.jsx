import './Pricing.css'

const plans = [
  {
    name: 'Starter Kit', price: '$999', desc: 'Perfect for small businesses & startups',
    features: ['Premium template base', 'Up to 3 pages', 'Basic SEO setup', '2 revision rounds', 'Responsive design', 'Email support'],
    featured: false, cta: 'Get Started'
  },
  {
    name: 'Professional', price: '$2,499', desc: 'For growing businesses ready to scale',
    features: ['Fully custom design', 'Up to 8 pages', 'Advanced animations', 'CMS integration', 'Complex integrations', 'WhatsApp support', '4 revision rounds'],
    featured: true, cta: 'Start Project'
  },
  {
    name: 'Custom / AI', price: "Let's Talk", desc: 'For AI apps & bespoke needs',
    features: ['AI chatbot development', 'n8n workflow setup', 'WhatsApp automation', 'Custom integrations', 'Dedicated support', 'Full documentation'],
    featured: false, cta: 'Book a Call'
  },
]

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '56px' }}>
          Flexible Pricing for Every Stage
        </h2>
        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div key={i} className={`pricing-card${p.featured ? ' featured' : ''}`}>
              {p.featured && <div className="pricing-badge">Most Popular</div>}
              <div className="pricing-plan">{p.name}</div>
              <div className="pricing-price">{p.price}</div>
              <p className="pricing-desc">{p.desc}</p>
              <ul className="pricing-list">
                {p.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <a href="#contact" className={`pricing-btn${p.featured ? ' pricing-btn-featured' : ''}`}
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                {p.cta}
                <span className="btn-arrow-sm">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
