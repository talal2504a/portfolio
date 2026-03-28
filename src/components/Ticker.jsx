import './Ticker.css'

const items = [
  { icon: '⊡', label: 'Landing Pages' },
  { icon: '⚡', label: 'Web Optimization' },
  { icon: '</>', label: 'Custom Code' },
  { icon: '🔍', label: 'SEO Expert' },
  { icon: '▣', label: 'Framer Developer' },
  { icon: '💬', label: 'WhatsApp Automations' },
  { icon: 'n8n', label: 'n8n Workflows' },
  { icon: '⊡', label: 'Landing Pages' },
  { icon: '⚡', label: 'Web Optimization' },
  { icon: '</>', label: 'Custom Code' },
  { icon: '🔍', label: 'SEO Expert' },
  { icon: '▣', label: 'Framer Developer' },
  { icon: '💬', label: 'WhatsApp Automations' },
  { icon: 'n8n', label: 'n8n Workflows' },
]

export default function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-icon">{item.icon}</span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  )
}
