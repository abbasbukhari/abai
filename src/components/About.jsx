import { Tk, CodeBlock } from './TechChrome'
import { CREDENTIALS, TECH_STACK } from '../data'

export default function About() {
  return (
    <section className="section-pad" id="about">
      <div className="container">
        <span className="eyebrow code reveal">about/founder.md</span>
        <div className="about-grid reveal" style={{ marginTop: 18 }}>
          <div className="about-text">
            <h2 className="h-section">
              I've worked inside the data centers <span className="accent">your AI vendors fear.</span>
            </h2>
            <p>
              For ten years I've been the person enterprise IT calls when something
              has to work and cannot leak. Microsoft datacenters in Hong Kong and
              Toronto. TD Bank as an FDM consultant. Rogers Communications.
            </p>
            <p>
              ABAI is what happens when someone who's seen real-world compliance from
              the inside builds AI for the firms that have to live with it. The same
              rigour, the same controls — sized for a five-person practice instead of
              a Fortune 500.
            </p>

            <CodeBlock file="~/principle.yaml" lang="yaml">
              <Tk k="key">principle</Tk>:{'\n  '}
              <Tk k="key">data_locality</Tk>:{'    '}<Tk k="str">"on-premise"</Tk>{'\n  '}
              <Tk k="key">training_use</Tk>:{'     '}<Tk k="str">"never"</Tk>{'     '}<Tk k="com"># client data → vendor models</Tk>{'\n  '}
              <Tk k="key">egress_to_cloud</Tk>:{'  '}<Tk k="num">0</Tk>{'          '}<Tk k="com"># bytes / day, by design</Tk>{'\n  '}
              <Tk k="key">audit_trail</Tk>:{'      '}<Tk k="str">"complete"</Tk>
            </CodeBlock>

            <span className="eyebrow code" style={{ marginTop: 28, display: 'block' }}>hands-on stack</span>
            <div className="about-stack-row">
              {TECH_STACK.map(t => <span key={t} className="pill blue">{t}</span>)}
            </div>
          </div>

          <aside className="resume-card">
            <div className="resume-photo">
              <img src="/assets/founder-final.png" alt="Abbas Bukhari — Founder, ABAI Consulting" />
              <span className="resume-photo-tag"><span className="dot" />Ontario, CA</span>
            </div>
            <div className="resume-head">
              <span className="resume-title">~/profile.yaml</span>
              <span className="pill dark">Available · new clients</span>
            </div>
            <h3 className="resume-name">Abbas Bukhari</h3>
            <p className="resume-role">Founder &amp; Principal · ABAI Consulting</p>
            <ul className="resume-list">
              {CREDENTIALS.map(c => (
                <li key={c.org} className="resume-item">
                  <div className="resume-item-main">
                    <span className="resume-item-org">{c.org}</span>
                    <span className="resume-item-role">{c.role}</span>
                  </div>
                  <span className="resume-item-year">{c.year}</span>
                </li>
              ))}
            </ul>
            <div className="resume-meta">
              <span className="k">uptime</span><span className="v">10+ yrs in enterprise</span>
              <span className="k">stack</span><span className="v">Linux · Win Server · Python</span>
              <span className="k">status</span><span className="v"><span className="accent">● online</span> · responding</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
