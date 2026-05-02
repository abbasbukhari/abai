import Icon from './Icon'
import { COVERAGE_AREAS } from '../data'

export default function Coverage() {
  return (
    <section className="coverage">
      <div className="container coverage-inner">
        <span className="coverage-label">Coverage</span>
        <div className="coverage-pills">
          {COVERAGE_AREAS.map(a => (
            <span key={a} className="pill">
              <Icon name="pin" size={12} stroke={2} />{a}
            </span>
          ))}
        </div>
        <span className="coverage-cap">In-person setup anywhere in Ontario.</span>
      </div>
    </section>
  )
}
