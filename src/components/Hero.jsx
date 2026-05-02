import Icon from './Icon'
import IDEPane from './IDEPane'
import { HERO_HEADLINES } from '../data'

export default function Hero({ headlineIdx = 0, onCtaClick }) {
  const h = HERO_HEADLINES[headlineIdx] || HERO_HEADLINES[0]

  const renderHeadline = () => {
    const text = h.display
    const em = h.em
    if (!em || !text.includes(em)) return text
    const idx = text.indexOf(em)
    return (
      <>
        {text.slice(0, idx)}
        <span className="em">{em}</span>
        {text.slice(idx + em.length)}
      </>
    )
  }

  return (
    <section className="hero" id="top">
      <div className="hexgrid-bg" />
      <div className="container hero-grid">
        <div>
          <div className="hero-amber-line">
            <span className="hero-amber-label">Private AI for regulated work</span>
          </div>
          <h1>{renderHeadline()}</h1>
          <p className="hero-sub">
            I install local AI inside your office so your firm gets the speed of GPT
            without sending a single client file to the cloud. One flat fee.
            Same-day setup. Anywhere in Ontario.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={onCtaClick}>
              Book a Free Demo
              <Icon name="arrow-right" size={14} className="arrow" />
            </button>
            <a className="btn btn-ghost on-dark" href="#process">
              See how it works
            </a>
          </div>

          <div className="hero-terminal">
            <IDEPane />
          </div>

          <div className="hero-meta">
            <span className="live">Available in Ontario</span>
            <span className="dot" />
            <span>Responds within 24 hours</span>
            <span className="dot" />
            <span>$0 demo &middot; on-site</span>
          </div>
        </div>

        <aside className="cred-card" aria-label="Founder credentials">
          <div className="cred-card-head">
            <span className="cred-card-title">Founder · At a glance</span>
            <span className="pill dark"><span className="dot" />Verified</span>
          </div>
          <div className="cred-stats">
            <div className="cred-stat">
              <div className="cred-stat-num">10<span className="unit">+</span></div>
              <div className="cred-stat-label">Years in enterprise IT &amp; consulting</div>
            </div>
            <div className="cred-stat">
              <div className="cred-stat-num">3</div>
              <div className="cred-stat-label">Enterprise environments delivered onsite</div>
            </div>
            <div className="cred-stat">
              <div className="cred-stat-num">MSc</div>
              <div className="cred-stat-label">Computer Science · Middlesex University, London</div>
            </div>
            <div className="cred-stat">
              <div className="cred-stat-num">ON</div>
              <div className="cred-stat-label">Ontario-wide on-site coverage</div>
            </div>
          </div>
          <div className="cred-card-foot">
            <span>OLLAMA</span><span>·</span><span>OPEN&nbsp;WEBUI</span><span>·</span><span>CLAUDE&nbsp;API</span>
          </div>
        </aside>
      </div>
    </section>
  )
}
