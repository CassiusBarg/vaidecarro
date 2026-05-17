export default function DriverPanel({ bestDriver, demandLevel, onToggleDemand, status }) {
  return (
    <section className="driver-card">
      <div>
        <p className="eyebrow">Painel do motorista</p>
        <h2>Oferta inteligente para corridas urbanas</h2>
      </div>

      <div className="driver-profile">
        <div className="avatar">🚗</div>
        <div>
          <strong>{bestDriver.name}</strong>
          <span>
            {bestDriver.model} · ⭐ {bestDriver.rating}
          </span>
        </div>
      </div>

      <div className="driver-stats">
        <div>
          <span>Demanda</span>
          <strong>{demandLevel}</strong>
        </div>
        <div>
          <span>Status</span>
          <strong>{status}</strong>
        </div>
      </div>

      <button type="button" className="ghost-button" onClick={onToggleDemand}>
        Alternar demanda
      </button>
    </section>
  )
}
