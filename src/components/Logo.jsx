export function ABAILogomark({ size = 28, color = 'currentColor', accent = null }) {
  const a = accent || color
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 2.2 L27.5 8.6 L27.5 23.4 L16 29.8 L4.5 23.4 L4.5 8.6 Z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" fill="none" />
      <path d="M11 21 L16 9 L21 21" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M13 17 L19 17" stroke={color} strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="16" cy="2.2" r="1.4" fill={a} />
    </svg>
  )
}

export function ABAILockup({ size = 28, tagline = 'Consulting' }) {
  return (
    <span className="abai-lockup" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <ABAILogomark size={size} />
      <span className="abai-wordmark">
        <span className="abai-name">ABAI</span>
        {tagline && <><span> </span><span className="abai-tag">{tagline}</span></>}
      </span>
    </span>
  )
}
