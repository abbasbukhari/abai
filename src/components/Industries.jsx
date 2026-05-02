import Breadcrumb from './Breadcrumb'
import { INDUSTRIES } from '../data'

function QueryTable({ industries }) {
  return (
    <div className="qtable">
      <div className="qtable-head">
        <span style={{ color: 'var(--text)' }}>// query result</span>
        <span className="meta">rows: <b>{industries.length}</b> · time: <b>2.4ms</b> · cache: <b>hit</b></span>
      </div>
      <div className="qtable-cmd">
        <span className="kw">SELECT</span> <span className="col">industry, risk, replaces</span> <span className="kw">FROM</span> <span className="from">abai.clients</span><br />
        {' '}<span className="kw">WHERE</span> <span className="where">data_sensitivity = 'high'</span> <span className="kw">AND</span> <span className="where">cloud_safe = false</span><span className="from">;</span>
      </div>
      <div className="qtable-cols">
        <div>industry</div>
        <div>compliance risk</div>
        <div>tool replaced</div>
        <div>tenant_id</div>
      </div>
      {industries.map((it, i) => (
        <div key={it.name} className="qtable-row">
          <div className="industry">{it.name}</div>
          <div className="risk">{it.risk}</div>
          <div className="replaces">{it.solution}</div>
          <div className="id"><span className="pill">tenant_{String(i + 1).padStart(3, '0')}</span></div>
        </div>
      ))}
      <div className="qtable-foot">
        <span className="ok">all rows: data stays on-premise</span>
        <span style={{ marginLeft: 'auto', color: 'var(--muted-2)' }}>egress: 0 B</span>
      </div>
    </div>
  )
}

export default function Industries() {
  const items = INDUSTRIES.map(it => ({ name: it.name, risk: it.risk, solution: it.solve }))
  return (
    <section className="industries section-pad" id="industries">
      <div className="container">
        <div className="industries-head reveal">
          <div>
            <Breadcrumb path="abai / clients / industries.served" />
            <span className="eyebrow code">SELECT industry FROM clients</span>
            <h2 className="h-section" style={{ marginTop: 18 }}>
              Three industries. <span className="accent">Three specific risks.</span>
            </h2>
          </div>
          <p className="lede">
            Every regulated profession has one tool it can't risk pasting into a public
            chatbot. Here's the tool ABAI replaces — and the risk it removes.
          </p>
        </div>
        <div className="reveal">
          <QueryTable industries={items} />
        </div>
      </div>
    </section>
  )
}
