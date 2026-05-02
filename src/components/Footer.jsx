import { ABAILockup } from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <ABAILockup size={32} />
            </div>
            <p className="footer-tagline">
              Private AI for Canadian firms that can't afford a privacy headline.
              Installed on your hardware, by hand, anywhere in Ontario.
            </p>
          </div>
          <div>
            <h5>Navigate</h5>
            <ul className="footer-links">
              <li><a href="#benefits">Why ABAI</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul className="footer-links">
              <li><a href="mailto:abbas@abai.consulting">abbas@abai.consulting</a></li>
              <li><a href="tel:9054628072">905 462 8072</a></li>
              <li>Ontario, Canada</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ABAI CONSULTING</span>
          <span>BUILT IN ONTARIO · PRIVATE BY DEFAULT</span>
        </div>
      </div>
    </footer>
  )
}
