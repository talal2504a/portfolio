import './Process.css'

const steps = [
  { num: '01', title: 'Reach Out', desc: 'Fill out the contact form or book a free discovery call. Tell me about your project, goals, and timeline.' },
  { num: '02', title: 'Design', desc: 'I create functional, stunning designs tailored to your brand — with your feedback at every stage.' },
  { num: '03', title: 'Build', desc: 'Transforming designs into scalable, optimised, lightning-fast websites built with clean code.' },
  { num: '04', title: 'Launch & Support', desc: 'Fully tested delivery with ongoing support, so your site keeps performing long after launch.' },
]

export default function Process() {
  return (
    <section className="section" id="process" style={{ background: '#050505' }}>
      <div className="container">
        <h2 className="section-heading" style={{ textAlign: 'center', marginBottom: '56px' }}>
          Process is Everything
        </h2>
        <div className="process-grid">
          {steps.map((s, i) => (
            <div key={i} className="process-card">
              <div className="process-num">{s.num}</div>
              <h3 className="process-title">{s.title}</h3>
              <p className="process-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
