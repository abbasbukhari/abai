import { useState } from 'react'
import { useScrolled } from '../hooks/useScrolled'
import { ABAILockup } from './Logo'
import Icon from './Icon'

export default function Navbar({ onCtaClick }) {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  const handleCtaClick = () => {
    close()
    onCtaClick()
  }

  return (
    <>
      <nav className={'nav' + (scrolled ? ' is-scrolled' : '') + (open ? ' menu-open' : '')}>
        <div className="container nav-inner">
          <div className="brand">
            <ABAILockup size={28} tagline="Consulting" />
          </div>
          <div className="nav-links">
            <a className="nav-link" href="#benefits" onClick={close}>Why ABAI</a>
            <a className="nav-link" href="#industries" onClick={close}>Industries</a>
            <a className="nav-link" href="#process" onClick={close}>Process</a>
            <a className="nav-link" href="#services" onClick={close}>Services</a>
            <a className="nav-link" href="#about" onClick={close}>About</a>
            <button className="btn btn-primary btn-sm" onClick={handleCtaClick}>
              Book a Free Demo
              <Icon name="arrow-right" size={14} />
            </button>
          </div>
          <button
            className="nav-hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={'hamburger' + (open ? ' is-open' : '')}>
              <span /><span /><span />
            </span>
          </button>
        </div>

        {open && (
          <div className="nav-mobile-menu">
            <a className="nav-mobile-link" href="#benefits" onClick={close}>Why ABAI</a>
            <a className="nav-mobile-link" href="#industries" onClick={close}>Industries</a>
            <a className="nav-mobile-link" href="#process" onClick={close}>Process</a>
            <a className="nav-mobile-link" href="#services" onClick={close}>Services</a>
            <a className="nav-mobile-link" href="#about" onClick={close}>About</a>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleCtaClick}>
              Book a Free Demo
              <Icon name="arrow-right" size={14} />
            </button>
          </div>
        )}
      </nav>

      {open && <div className="nav-overlay" onClick={close} />}
    </>
  )
}
