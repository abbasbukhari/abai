import { HOW_IT_WORKS } from "../data";

export default function ProcessSection() {
  return (
    <section
      className="section-pad"
      id="process"
      style={{ background: "#FAFAF8" }}
    >
      <div className="container">
        <div className="reveal">
          <h2 className="h-section" style={{ marginBottom: 48 }}>
            How it works
          </h2>
          <div className="process-grid">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={i} className="process-card">
                <div className="process-num">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
