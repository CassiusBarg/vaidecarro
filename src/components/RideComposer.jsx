import { rideClasses } from '../data/places'

export default function RideComposer({
  places,
  originId,
  destinationId,
  rideClassId,
  onOriginChange,
  onDestinationChange,
  onRideClassChange,
  onRequestRide,
  fare,
  distance,
  duration,
  bestDriver,
  canRequest,
}) {
  return (
    <section className="booking-card">
      <div>
        <p className="eyebrow">Passageiro</p>
        <h2>Peça um carro em poucos cliques</h2>
      </div>

      <label>
        Origem
        <select value={originId} onChange={(event) => onOriginChange(event.target.value)}>
          {places.map((place) => (
            <option key={place.id} value={place.id}>
              {place.name} - {place.district}
            </option>
          ))}
        </select>
      </label>

      <label>
        Destino
        <select value={destinationId} onChange={(event) => onDestinationChange(event.target.value)}>
          {places.map((place) => (
            <option key={place.id} value={place.id}>
              {place.name} - {place.district}
            </option>
          ))}
        </select>
      </label>

      <div className="ride-class-grid">
        {rideClasses.map((rideClass) => (
          <button
            key={rideClass.id}
            type="button"
            className={rideClass.id === rideClassId ? 'ride-class active' : 'ride-class'}
            onClick={() => onRideClassChange(rideClass.id)}
          >
            <strong>{rideClass.label}</strong>
            <span>{rideClass.description}</span>
          </button>
        ))}
      </div>

      <div className="trip-metrics">
        <div>
          <span>Distância</span>
          <strong>{distance ? `${distance} km` : '--'}</strong>
        </div>
        <div>
          <span>Duração</span>
          <strong>{duration ? `${duration} min` : '--'}</strong>
        </div>
        <div>
          <span>Motorista</span>
          <strong>{bestDriver ? `${bestDriver.eta} min` : '--'}</strong>
        </div>
      </div>

      <div className="fare-row">
        <div>
          <span>Estimativa</span>
          <strong>{fare ? fare.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'R$ --'}</strong>
        </div>
        <button type="button" disabled={!canRequest} onClick={onRequestRide}>
          Solicitar carro
        </button>
      </div>
    </section>
  )
}
