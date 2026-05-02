import { useState } from 'react'
import Icon from './Icon'
import { SERVICE_GROUPS } from '../data'

function ServiceRow({ s }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div
        className={'svc-row' + (open ? ' is-open' : '')}
        onClick={() => setOpen(!open)}
      >
        <div className="svc-row-num">{s.n}</div>
        <div className="svc-row-name">{s.name}</div>
        <div className="svc-row-desc">{s.desc}</div>
        <div className="svc-row-price">{s.price}<br /><small>{s.priceNote}</small></div>
        <div className="svc-toggle"><Icon name="plus" size={16} stroke={2} /></div>
      </div>
      {open && (
        <div className="svc-detail">
          <div>
            <h5>What's included</h5>
            <ul>{s.what.map(x => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <h5>Deliverables</h5>
            <ul>{s.deliv.map(x => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      )}
    </>
  )
}

export default function Services() {
  const [groupId, setGroupId] = useState(SERVICE_GROUPS[0].id)
  const group = SERVICE_GROUPS.find(g => g.id === groupId)

  return (
    <section className="services section-pad" id="services">
      <div className="container">
        <div className="services-head reveal">
          <div>
            <span className="eyebrow code">services</span>
            <h2 className="h-section" style={{ marginTop: 18 }}>
              Three ways to <span className="accent">work together.</span>
            </h2>
          </div>
          <p className="lede">
            Pick a starting point. Most clients begin with a single setup, then
            add ongoing support once their team is using it daily.
          </p>
        </div>

        <div className="svc-tabs reveal">
          {SERVICE_GROUPS.map(g => (
            <button
              key={g.id}
              className={'svc-tab' + (g.id === groupId ? ' is-active' : '')}
              onClick={() => setGroupId(g.id)}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div className="svc-table reveal">
          {group.items.map(s => <ServiceRow key={s.n} s={s} />)}
        </div>
      </div>
    </section>
  )
}
