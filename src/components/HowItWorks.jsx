import { useState, useEffect } from 'react'
import Icon from './Icon'
import { STEPS } from '../data'

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % STEPS.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section-pad" id="process">
      <div className="container">
        <div className="benefits-head reveal">
          <div>
            <span className="eyebrow code">how-it-works</span>
            <h2 className="h-section" style={{ marginTop: 18 }}>
              Four steps from <span className="accent">call</span> to working AI.
            </h2>
          </div>
          <p className="lede">
            No two-month rollout. No procurement gauntlet. The whole thing is
            usually finished in an afternoon.
          </p>
        </div>

        <div className="steps reveal">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={'step' + (active === i ? ' is-active' : '')}
              onMouseEnter={() => setActive(i)}
            >
              <div className="step-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
              <div className="step-time">{s.time}</div>
            </div>
          ))}
        </div>

        <div className="same-day reveal">
          <div className="same-day-text">
            Most setups are <strong>done the same day</strong>.
          </div>
          <div className="same-day-foot">
            <Icon name="clock" size={12} stroke={2} />
            AVG. 4 HOURS DOOR-TO-DOOR
          </div>
        </div>
      </div>
    </section>
  )
}
