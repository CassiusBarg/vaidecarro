import { nearbyDrivers } from '../data/places'

function RoutePoint({ label, point, tone }) {
  return (
    <div
      className={`route-point ${tone}`}
      style={{ left: `${point.x}%`, top: `${point.y}%` }}
      title={label}
    >
      <span>{label}</span>
    </div>
  )
}

function DriverMarker({ driver }) {
  return (
    <div
      className="driver-marker"
      style={{ left: `${driver.position.x}%`, top: `${driver.position.y}%` }}
      title={`${driver.name} - ${driver.model}`}
    >
      🚘
    </div>
  )
}

export default function MapPreview({ origin, destination, status }) {
  const ready = origin && destination && origin.id !== destination.id

  return (
    <section className="map-card">
      <div className="map-header">
        <div>
          <p className="eyebrow">Mapa ao vivo</p>
          <h2>{ready ? 'Rota calculada' : 'Escolha sua rota'}</h2>
        </div>
        <span className={`status-pill ${status}`}>{status}</span>
      </div>

      <div className="map-surface">
        <div className="map-grid" />
        {nearbyDrivers.map((driver) => (
          <DriverMarker key={driver.id} driver={driver} />
        ))}

        {ready && (
          <>
            <svg className="route-line" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line
                x1={origin.coordinates.x}
                y1={origin.coordinates.y}
                x2={destination.coordinates.x}
                y2={destination.coordinates.y}
              />
            </svg>
            <RoutePoint label="A" point={origin.coordinates} tone="origin" />
            <RoutePoint label="B" point={destination.coordinates} tone="destination" />
          </>
        )}
      </div>
    </section>
  )
}
