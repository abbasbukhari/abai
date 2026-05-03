import { PRICING } from "../data";

export default function PricingSection() {
  return (
    <section className="section-pad" id="pricing">
      <div className="container">
        <div className="reveal">
          <div className="pricing-header-section">
            <h2 className="h-section">Simple, fair pricing</h2>
            <p className="pricing-subhead">
              Start with a free assessment. Choose the plan that fits your needs. Scale as you grow.
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
            <h3>Ready to get started?</h3>
            <p>
              Schedule your free assessment today. No obligation. We'll spend 30 minutes
              understanding your workflow and showing you exactly how AI can help your team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
