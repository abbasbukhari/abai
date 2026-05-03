import { PRICING } from "../data";

export default function PricingSection() {
  return (
    <section className="section-pad" id="pricing">
      <div className="container">
        <div className="reveal">
          <div className="pricing-header-section">
            <h2 className="h-section">Pricing that scales with you</h2>
            <p className="pricing-subhead">
              From your first consultation to enterprise deployment. Clear costs, no surprises.
            </p>
          </div>

          <div className="pricing-grid">
            {PRICING.map((plan, i) => (
              <div
                key={i}
                className={`pricing-card ${plan.featured ? "pricing-featured" : ""}`}
              >
                {plan.featured && (
                  <div className="pricing-badge">Most Popular</div>
                )}
                <div className="pricing-header-inner">
                  <h3>{plan.name}</h3>
                  <div className="pricing-amount">{plan.price}</div>
                </div>
                <p className="pricing-desc">{plan.desc}</p>
                <div className="pricing-outcome">
                  <strong>{plan.outcome}</strong>
                </div>
                <ul className="pricing-list">
                  {plan.includes.map((item, j) => (
                    <li key={j}>
                      <span className="check">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary pricing-cta">
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="pricing-guarantee">
            <h3>Our guarantee</h3>
            <p>
              Not happy with your implementation? Get your money back within 30 days.
              We're confident in our work — and you should be too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
