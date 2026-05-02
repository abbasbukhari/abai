import { useState, useEffect, useRef } from 'react'

/* ── Terminal ── */
function highlightCmd(t) {
  if (!t) return ''
  const escaped = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const parts = escaped.split(' ')
  return parts.map((p, i) => {
    if (i === 0) return `<span class="tk-cmd">${p}</span>`
    if (p.startsWith('--')) return `<span class="tk-flag">${p}</span>`
    return `<span class="tk-arg">${p}</span>`
  }).join(' ')
}

export function Terminal({ title = 'ollama@abai', lines = [], status = 'DATA STAYS LOCAL', autoplay = true, loop = true }) {
  const [shown, setShown] = useState(autoplay ? 0 : lines.length)
  const [typing, setTyping] = useState(autoplay ? '' : null)

  useEffect(() => {
    if (!autoplay) return
    let cancelled = false
    const timeouts = []
    const run = async () => {
      while (!cancelled) {
        for (let i = 0; i < lines.length && !cancelled; i++) {
          const line = lines[i]
          setShown(i)
          if (line.type === 'cmd') {
            const text = line.text
            for (let c = 0; c <= text.length && !cancelled; c++) {
              setTyping(text.slice(0, c))
              await new Promise(r => { const t = setTimeout(r, 22 + Math.random() * 30); timeouts.push(t) })
            }
            setTyping(null)
            setShown(i + 1)
          } else {
            await new Promise(r => { const t = setTimeout(r, line.delay || 280); timeouts.push(t) })
            setShown(i + 1)
          }
        }
        if (!loop) break
        await new Promise(r => { const t = setTimeout(r, 1800); timeouts.push(t) })
        setShown(0)
        setTyping('')
      }
    }
    run()
    return () => { cancelled = true; timeouts.forEach(clearTimeout) }
  }, [])

  const renderLine = (line, idx, isTyping) => {
    if (line.type === 'blank') return <span key={idx} className="tk-line">&nbsp;</span>
    if (line.type === 'com') return <span key={idx} className="tk-line"><span className="tk-com">{line.text}</span></span>
    if (line.type === 'cmd') {
      const text = isTyping ? typing : line.text
      return (
        <span key={idx} className="tk-line">
          <span className="tk-prompt">$ </span>
          <span dangerouslySetInnerHTML={{ __html: highlightCmd(text || '') }} />
          {isTyping && <span className="tk-cursor" />}
        </span>
      )
    }
    if (line.type === 'ok') return <span key={idx} className="tk-line"><span className="tk-ok">✓ </span><span className="tk-out">{line.text}</span></span>
    if (line.type === 'warn') return <span key={idx} className="tk-line"><span className="tk-warn">! </span><span className="tk-out">{line.text}</span></span>
    return <span key={idx} className="tk-line"><span className="tk-out">{line.text}</span></span>
  }

  return (
    <div className="terminal">
      <div className="terminal-head">
        <div className="terminal-dots"><span /><span /><span /></div>
        <span className="terminal-title">{title}</span>
        <span className="terminal-status">{status}</span>
      </div>
      <div className="terminal-body">
        {lines.slice(0, shown).map((l, i) => renderLine(l, i, false))}
        {typing !== null && shown < lines.length && lines[shown]?.type === 'cmd' && renderLine(lines[shown], shown, true)}
      </div>
    </div>
  )
}

/* ── Syntax token helpers ── */
export const Tk = ({ k, children }) => <span className={`ck-${k}`}>{children}</span>

export function CodeBlock({ file, children, dark = false, lang = 'yaml' }) {
  return (
    <div className={'code-block' + (dark ? ' dark' : '')}>
      {file && (
        <div className="code-block-head">
          <span className="file">{file}</span>
          <span>{lang}</span>
        </div>
      )}
      <pre style={{ margin: 0, fontFamily: 'inherit', fontSize: 'inherit', lineHeight: 'inherit', whiteSpace: 'pre-wrap' }}>
        {children}
      </pre>
    </div>
  )
}

/* ── StatusRibbon ── */
export function StatusRibbon() {
  return (
    <div className="status-ribbon">
      <div className="container status-ribbon-inner">
        <div className="status-cell">
          <span className="status-led" />
          <div><div className="status-key">Egress</div><div className="status-val">0 bytes / day</div></div>
        </div>
        <div className="status-cell">
          <span className="status-led blue" />
          <div><div className="status-key">Runtime</div><div className="status-val">Ollama · local</div></div>
        </div>
        <div className="status-cell">
          <span className="status-led amber" />
          <div><div className="status-key">Hardware</div><div className="status-val">your office</div></div>
        </div>
        <div className="status-cell">
          <span className="status-led" />
          <div><div className="status-key">Compliance</div><div className="status-val">PIPEDA / PHIPA</div></div>
        </div>
      </div>
    </div>
  )
}
