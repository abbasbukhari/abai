import { useState, useEffect } from 'react'
import { Terminal } from './TechChrome'

function YamlPane() {
  const lines = [
    { k: 'c0', el: <span className="yk-com"># tenant: smith-co · law firm · 7 users</span> },
    { k: 'd0', el: <><span className="yk-key">deployment</span><span className="yk-punct">:</span></> },
    { k: 'd1', el: <>{'  '}<span className="yk-key">mode</span><span className="yk-punct">:</span> <span className="yk-str">"on-premise"</span></> },
    { k: 'd2', el: <>{'  '}<span className="yk-key">hardware</span><span className="yk-punct">:</span> <span className="yk-str">"client-office"</span></> },
    { k: 'd3', el: <>{'  '}<span className="yk-key">internet_access</span><span className="yk-punct">:</span> <span className="yk-bool">false</span>{'  '}<span className="yk-com"># by design</span></> },
    { k: 'da', el: <span className="yk-key">data:</span> },
    { k: 'da1', el: <>{'  '}<span className="yk-key">egress_to_cloud</span><span className="yk-punct">:</span> <span className="yk-num">0</span>{'  '}<span className="yk-com"># bytes / day</span></> },
    { k: 'da2', el: <>{'  '}<span className="yk-key">used_for_training</span><span className="yk-punct">:</span> <span className="yk-bool">false</span></> },
    { k: 'da3', el: <>{'  '}<span className="yk-key">retention</span><span className="yk-punct">:</span> <span className="yk-str">"client-controlled"</span></> },
    { k: 'co', el: <span className="yk-key">compliance:</span> },
    { k: 'co1', el: <>{'  - '}<span className="yk-str">"PIPEDA"</span></> },
    { k: 'co2', el: <>{'  - '}<span className="yk-str">"solicitor-client privilege"</span></> },
  ]
  return (
    <div className="ide-pane">
      <div className="ide-gutter">{lines.map((l, i) => <span key={l.k}>{i + 1}</span>)}</div>
      <div className="ide-content">{lines.map(l => <div key={l.k}>{l.el}</div>)}</div>
    </div>
  )
}

function TerminalPane() {
  return (
    <div className="ide-pane" style={{ padding: 0 }}>
      <div className="ide-gutter" style={{ visibility: 'hidden' }}><span>1</span></div>
      <div style={{ flex: 1, padding: '14px 18px' }}>
        <Terminal
          title=""
          status=""
          autoplay
          loop
          lines={[
            { type: 'com', text: '# new client setup — runs entirely on your hardware' },
            { type: 'cmd', text: 'ollama run abai/legal-7b --private --offline' },
            { type: 'out', text: 'pulling model… 4.1 GB' },
            { type: 'ok', text: 'model loaded · 0 bytes sent to cloud' },
            { type: 'cmd', text: 'abai status --tenant smith-co' },
            { type: 'ok', text: 'tenant: smith-co · users: 7 · egress: 0 B' },
            { type: 'ok', text: 'compliance: PIPEDA · solicitor-client privilege intact' },
            { type: 'blank' },
          ]}
        />
        <style>{`.ide-pane .terminal { background: transparent; border: 0; }`}</style>
      </div>
    </div>
  )
}

function LogPane() {
  const [lines, setLines] = useState([])
  useEffect(() => {
    const seed = [
      ['10:42:01', 'info', 'tenant.smith-co · query received · "draft retainer for J. Park"'],
      ['10:42:01', 'ok', 'rag.lookup · 4 precedents matched in local index'],
      ['10:42:02', 'ok', 'inference · llama-3 · local · 1,184 tokens'],
      ['10:42:02', 'zero', 'egress · 0 bytes · cloud-bound: none'],
      ['10:42:14', 'info', 'tenant.medway-clinic · query received · "phipa intake summary"'],
      ['10:42:15', 'ok', 'rag.lookup · 7 chart-notes matched (encrypted at rest)'],
      ['10:42:16', 'ok', 'inference · 2,041 tokens · 4.2s'],
      ['10:42:16', 'zero', 'egress · 0 bytes · phi → never left clinic LAN'],
      ['10:42:31', 'info', 'audit · daily report generated · /var/log/abai/2026-05-01.csv'],
      ['10:42:31', 'ok', 'health · all tenants green · uptime 47d'],
    ]
    let i = 0
    setLines([seed[0]])
    const id = setInterval(() => {
      i = (i + 1) % seed.length
      setLines(prev => {
        const next = [...prev, seed[i]]
        return next.length > 9 ? next.slice(-9) : next
      })
    }, 1100)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="ide-pane">
      <div className="ide-gutter">{lines.map((_, i) => <span key={i}>{i + 1}</span>)}</div>
      <div className="ide-content">
        {lines.map(([t, k, msg], i) => {
          const klass = k === 'ok' ? 'lg-ok' : k === 'warn' ? 'lg-warn' : k === 'err' ? 'lg-err' : k === 'zero' ? 'lg-zero' : 'lg-info'
          return (
            <div key={i}>
              <span className="lg-time">{t}</span> <span className={klass}>[{k.toUpperCase().padEnd(4, ' ')}]</span> {msg}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function IDEPane() {
  const [tab, setTab] = useState(0)
  const tabs = ['config.yaml', 'terminal', 'egress.log']

  useEffect(() => {
    const id = setInterval(() => setTab(t => (t + 1) % 3), 7500)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="ide">
      <div className="ide-titlebar">
        <div className="dots"><span /><span /><span /></div>
        <span className="path">~/abai/clients/smith-co</span>
        <span className="right">DATA STAYS LOCAL</span>
      </div>
      <div className="ide-tabs" role="tablist">
        {tabs.map((t, i) => (
          <button key={t} className="ide-tab" role="tab" aria-selected={tab === i} onClick={() => setTab(i)}>
            <span className="dot" />{t}
          </button>
        ))}
      </div>
      {tab === 0 && <YamlPane />}
      {tab === 1 && <TerminalPane />}
      {tab === 2 && <LogPane />}
    </div>
  )
}
