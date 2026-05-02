const s = 28

const TLogo = {
  ollama: () => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19 L5 12 C5 8 7 6 9.5 6 L9.5 4 L11 4 L11 6 L13 6 L13 4 L14.5 4 L14.5 6 C17 6 19 8 19 12 L19 19" />
      <path d="M9 19 L9 16 M15 19 L15 16" />
      <circle cx="9.5" cy="9" r="0.6" fill="currentColor" />
      <circle cx="14.5" cy="9" r="0.6" fill="currentColor" />
    </svg>
  ),
  openwebui: () => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9 L21 9" />
      <circle cx="6" cy="7" r="0.7" fill="currentColor" />
      <circle cx="8.5" cy="7" r="0.7" fill="currentColor" />
      <path d="M7 13 L11 13 M7 16 L14 16" />
      <path d="M16 12.5 L18 14.5 L16 16.5" />
    </svg>
  ),
  claude: () => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4 L12 20" />
      <path d="M5 8 L19 16" />
      <path d="M5 16 L19 8" />
      <circle cx="12" cy="12" r="2.2" />
    </svg>
  ),
  python: () => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4 H14 A3 3 0 0 1 17 7 V11 H9 A3 3 0 0 0 6 14 V17" />
      <path d="M15 20 H10 A3 3 0 0 1 7 17 V13 H15 A3 3 0 0 0 18 10 V7" />
      <circle cx="10.5" cy="6.5" r="0.6" fill="currentColor" />
      <circle cx="13.5" cy="17.5" r="0.6" fill="currentColor" />
    </svg>
  ),
  rag: () => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="6" height="8" rx="0.5" />
      <path d="M5 7 H7 M5 9 H7" />
      <path d="M9.5 8 L13 10" />
      <circle cx="14.5" cy="11" r="2.2" />
      <path d="M16.5 12.5 L19 15" />
      <rect x="15" y="15" width="6" height="5" rx="0.5" />
    </svg>
  ),
  linux: () => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="13" rx="5" ry="7" />
      <path d="M9 7 C9 5 10.5 4 12 4 C13.5 4 15 5 15 7" />
      <circle cx="10.5" cy="9" r="0.6" fill="currentColor" />
      <circle cx="13.5" cy="9" r="0.6" fill="currentColor" />
      <path d="M8 19 L7 22 M16 19 L17 22" />
    </svg>
  ),
  windows: () => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <rect x="3.5" y="4.5" width="7" height="7" />
      <rect x="13.5" y="4.5" width="7" height="7" />
      <rect x="3.5" y="13" width="7" height="7" />
      <rect x="13.5" y="13" width="7" height="7" />
    </svg>
  ),
  docker: () => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <rect x="3" y="11" width="3" height="3" />
      <rect x="6.5" y="11" width="3" height="3" />
      <rect x="10" y="11" width="3" height="3" />
      <rect x="13.5" y="11" width="3" height="3" />
      <rect x="6.5" y="7.5" width="3" height="3" />
      <rect x="10" y="7.5" width="3" height="3" />
      <rect x="10" y="4" width="3" height="3" />
      <path d="M3 15 C8 19 16 19 21 15" />
    </svg>
  ),
  postgres: () => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6 V12 C5 13.5 8 15 12 15 C16 15 19 13.5 19 12 V6" />
      <path d="M5 12 V18 C5 19.5 8 21 12 21 C16 21 19 19.5 19 18 V12" />
    </svg>
  ),
  llama: () => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20 L7 14 C7 11 8 8 10 7 L10 4 L12 5 L14 4 L14 7 C16 8 17 11 17 14 L17 20" />
      <circle cx="10.5" cy="11" r="0.6" fill="currentColor" />
      <circle cx="13.5" cy="11" r="0.6" fill="currentColor" />
    </svg>
  ),
  mistral: () => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="miter">
      <rect x="3" y="5" width="18" height="3" />
      <rect x="3" y="10" width="18" height="3" />
      <rect x="3" y="15" width="18" height="3" />
    </svg>
  ),
  nvidia: () => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12 C7 7 11 7 14 9 C17 11 19 12 21 12" />
      <path d="M3 12 C7 17 11 17 14 15 C17 13 19 12 21 12" />
      <circle cx="11" cy="12" r="2" />
    </svg>
  ),
}

const STACK_ITEMS = [
  { key: 'ollama', name: 'Ollama' },
  { key: 'openwebui', name: 'Open WebUI' },
  { key: 'claude', name: 'Claude API' },
  { key: 'llama', name: 'Llama 3' },
  { key: 'mistral', name: 'Mistral' },
  { key: 'python', name: 'Python' },
  { key: 'rag', name: 'RAG' },
  { key: 'docker', name: 'Docker' },
  { key: 'postgres', name: 'Postgres' },
  { key: 'linux', name: 'Linux' },
  { key: 'windows', name: 'Win Server' },
  { key: 'nvidia', name: 'CUDA' },
]

export default function TechStackStrip() {
  return (
    <section className="techstack section-pad-sm" id="stack">
      <div className="container">
        <div className="techstack-head reveal">
          <span className="eyebrow code">stack.json</span>
          <h3 className="techstack-title">
            Built on the same open tools the world's most security-conscious teams trust.
          </h3>
        </div>
        <div className="techstack-grid reveal">
          {STACK_ITEMS.map(it => {
            const L = TLogo[it.key]
            return (
              <div key={it.key} className="techstack-cell">
                <div className="techstack-icon"><L /></div>
                <span className="techstack-name">{it.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
