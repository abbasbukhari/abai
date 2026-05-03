import { VALUE_PROPS, HOW_IT_WORKS } from '../data'
import Icon from './Icon'

export default function ValueSection() {
  return (
    <section className="section-pad" id="why">
      <div className="container">
        <div className="reveal">
          <h2 className="h-section" style={{ marginBottom: 48 }}>Why ABAI</h2>
          <div className="value-grid">
            {VALUE_PROPS.map((prop, i) => (
              <div key={i} className="value-card">
                <div className="value-num">{i + 1}</div>
                <h3>{prop.title}</h3>
                <p>{prop.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
