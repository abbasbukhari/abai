import { EXAMPLE_INDUSTRIES } from '../data'

export default function IndustriesSection() {
  return (
    <section className="section-pad" id="industries" style={{ background: '#FAFAF8' }}>
      <div className="container">
        <div className="reveal">
          <h2 className="h-section" style={{ marginBottom: 48 }}>Who we work with</h2>
          <p className="lede" style={{ marginBottom: 48, maxWidth: '100%' }}>
            We serve mid-sized businesses where data privacy is non-negotiable. Here are examples:
          </p>
          <div className="industries-grid">
            {EXAMPLE_INDUSTRIES.map((ind, i) => (
              <div key={i} className="industry-card">
                <h3>{ind.name}</h3>
                <p>{ind.use}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
