import { PRICING } from '../data'

export default function PricingSection() {
  return (
    <section className="section-pad" id="pricing">
      <div className="container">
        <div className="reveal">
          <h2 className="h-section" style={{ marginBottom: 48 }}>Pricing</h2>
          <div className="pricing-grid">
            {PRICING.map((plan, i) => (
              <div key={i} className="pricing-card">
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  <div className="pricing-amount">{plan.price}</div>
                </div>
                <p className="pricing-desc">{plan.desc}</p>
                <ul className="pricing-list">
                  {plan.includes.map((item, j) => (
                    <li key={j}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
