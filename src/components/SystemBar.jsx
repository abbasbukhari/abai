import { useState, useEffect } from 'react'

export default function SystemBar() {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    document.body.classList.add('has-sysbar')
    return () => { clearInterval(id); document.body.classList.remove('has-sysbar') }
  }, [])
  const t = time.toTimeString().slice(0, 8)
  return (
    <div className="sysbar">
      <span className="sysbar-cell"><span className="led" /><span className="v">abai-consulting</span></span>
      <span className="sysbar-cell sysbar-hide-mobile"><span className="branch" /><span className="v">main</span><span className="k">· clean</span></span>
      <span className="sysbar-cell sysbar-hide-mobile"><span className="k">last deploy</span><span className="v">2 days ago</span></span>
      <span className="sysbar-cell sysbar-hide-mobile"><span className="k">build</span><span className="v" style={{ color: '#6EE7B7' }}>passing</span></span>
      <span className="spacer" />
      <span className="sysbar-cell"><span className="k">utc</span><span className="v">{t}</span></span>
    </div>
  )
}
