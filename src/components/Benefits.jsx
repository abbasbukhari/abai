import Icon from './Icon'
import { BENEFITS } from '../data'

export default function Benefits() {
  return (
    <section className="section-pad" id="benefits">
      <div className="container">
        <div className="benefits-head reveal">
          <div>
            <span className="eyebrow code">why-abai</span>
            <h2 className="h-section" style={{ marginTop: 18 }}>
              Built for firms that <span className="accent">cannot</span> upload client data.
            </h2>
          </div>
          <p className="lede">
            Most AI products were designed for consumers, then sold to professionals.
            ABAI was built the other way around — privacy first, then convenience.
          </p>
        </div>
        <div className="benefits-grid">
          {BENEFITS.map((b, i) => (
            <article key={b.n} className="benefit reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="benefit-num">{b.n}</div>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
              <div className="benefit-foot">
                <Icon name="check" size={14} stroke={2} />{b.foot}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
