import './Footer.css'

export default function Footer() {
  return (
    <>
      {/* Footer CTA */}
      <section className="footer-cta" id="contact">
        <div className="fcta-glow" />
        <p className="fcta-sub">Book a Free Call</p>
        <h2 className="fcta-title">Let's Create<br />Something Amazing</h2>
        <a href="mailto:talal254a@aptechsite.net" className="fcta-btn">
          Book a Session Now
          <span className="fcta-arrow">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </span>
        </a>
      </section>

      {/* Footer bar */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            <p className="f-label">(Inquiries)</p>
            <p className="f-email">talal254a@aptechsite.net</p>
          </div>
          <div className="footer-right">
            <div className="f-col">
              <p className="f-label">(socials)</p>
              <a href="#" className="f-link">Instagram</a>
              <a href="#" className="f-link">LinkedIn</a>
              <a href="#" className="f-link">X / Twitter</a>
            </div>
            <div className="f-col">
              <p className="f-label">(navigation)</p>
              <a href="#projects" className="f-link">Projects</a>
              <a href="#pricing" className="f-link">Pricing</a>
              <a href="#contact" className="f-link">Book a Call</a>
            </div>
          </div>
        </div>
        <div className="footer-big-logo">
          talal2504a<span style={{ fontSize: '0.5em', color: 'rgba(255,255,255,0.7)' }}>.github</span>
        </div>
      </footer>
    </>
  )
}
