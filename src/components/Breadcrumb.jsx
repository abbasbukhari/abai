export default function Breadcrumb({ path }) {
  const parts = path.split('/')
  const file = parts.pop()
  return (
    <div className="section-breadcrumb">
      {parts.map((p, i) => (
        <span key={i}>{p}<span className="sep"> /</span> </span>
      ))}
      <span className="file">{file}</span>
    </div>
  )
}
