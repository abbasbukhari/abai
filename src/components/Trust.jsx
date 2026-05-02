import Breadcrumb from './Breadcrumb'
import { FRAMEWORKS } from '../data'

function JsonView({ frameworks }) {
  return (
    <div className="jsonview">
      <div className="jsonview-head">
        <span>~/compliance.json</span>
        <span>read-only · audited 2026-05-01</span>
      </div>
      <div>
        <span className="jv-punct">{'{'}</span><br />
        <span className="jv-indent" /><span className="jv-key">"jurisdiction"</span><span className="jv-punct">:</span> <span className="jv-str">"Canada / Ontario"</span><span className="jv-punct">,</span><br />
        <span className="jv-indent" /><span className="jv-key">"data_residency"</span><span className="jv-punct">:</span> <span className="jv-str">"on-premise"</span><span className="jv-punct">,</span><br />
        <span className="jv-indent" /><span className="jv-key">"egress_to_cloud"</span><span className="jv-punct">:</span> <span className="jv-num">0</span><span className="jv-punct">,</span> <span className="jv-com">// bytes / day</span><br />
        <span className="jv-indent" /><span className="jv-key">"frameworks"</span><span className="jv-punct">:</span> <span className="jv-punct">{'['}</span><br />
        {frameworks.map((f, i) => (
          <span key={f.name}>
            <span className="jv-indent" /><span className="jv-indent" />
            <span className="jv-punct">{'{ '}</span>
            <span className="jv-key">"name"</span><span className="jv-punct">:</span> <span className="jv-str">"{f.name}"</span><span className="jv-punct">,</span> <span className="jv-key">"covers"</span><span className="jv-punct">:</span> <span className="jv-str">"{f.desc}"</span>
            <span className="jv-punct">{' }'}</span>
            {i < frameworks.length - 1 ? <span className="jv-punct">,</span> : null}<br />
          </span>
        ))}
        <span className="jv-indent" /><span className="jv-punct">{']'}</span><span className="jv-punct">,</span><br />
        <span className="jv-indent" /><span className="jv-key">"audit_trail"</span><span className="jv-punct">:</span> <span className="jv-bool">true</span><span className="jv-punct">,</span><br />
        <span className="jv-indent" /><span className="jv-key">"used_for_training"</span><span className="jv-punct">:</span> <span className="jv-bool">false</span><br />
        <span className="jv-punct">{'}'}</span>
      </div>
    </div>
  )
}

export default function Trust() {
  return (
    <section className="trust section-pad scanlines">
      <div className="container trust-inner reveal">
        <Breadcrumb path="abai / security / compliance.json" />
        <h2>
          Built for industries where data privacy is <span className="em">not optional.</span>
        </h2>
        <JsonView frameworks={FRAMEWORKS} />
      </div>
    </section>
  )
}
