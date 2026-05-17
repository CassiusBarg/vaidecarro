import { useMemo, useState } from 'react'
import './App.css'
import { nearbyDrivers, places, rideClasses } from './data/places'
import DriverPanel from './components/DriverPanel'
import FeatureGrid from './components/FeatureGrid'
import MapPreview from './components/MapPreview'
import RideComposer from './components/RideComposer'
import { estimateDistance, estimateDuration, estimateFare } from './utils/pricing'

const demandSequence = ['baixa', 'moderada', 'alta']
const rideStatuses = ['pronto', 'motorista a caminho', 'em viagem', 'concluída']

function App() {
  const [originId, setOriginId] = useState('teatro-amazonas')
  const [destinationId, setDestinationId] = useState('ponta-negra')
  const [rideClassId, setRideClassId] = useState('economico')
  const [demandLevel, setDemandLevel] = useState('moderada')
  const [statusIndex, setStatusIndex] = useState(0)

  const origin = places.find((place) => place.id === originId)
  const destination = places.find((place) => place.id === destinationId)
  const rideClass = rideClasses.find((item) => item.id === rideClassId)
  const distance = useMemo(() => estimateDistance(origin, destination), [origin, destination])
  const duration = useMemo(() => estimateDuration(distance), [distance])
  const bestDriver = nearbyDrivers.reduce((fastest, driver) =>
    driver.eta < fastest.eta ? driver : fastest,
  )
  const fare = useMemo(
    () =>
      estimateFare({
        distance,
        duration,
        multiplier: rideClass.multiplier,
        demandLevel,
      }),
    [distance, duration, rideClass.multiplier, demandLevel],
  )

  const status = rideStatuses[statusIndex]
  const canRequest = originId !== destinationId

  function handleRequestRide() {
    setStatusIndex((current) => (current + 1) % rideStatuses.length)
  }

  function handleToggleDemand() {
    setDemandLevel((current) => {
      const nextIndex = (demandSequence.indexOf(current) + 1) % demandSequence.length
      return demandSequence[nextIndex]
    })
  }

  return (
    <main>
      <header className="hero">
        <nav>
          <a href="#inicio" className="brand">
            Vai de Carro
          </a>
          <div>
            <a href="#produto">Produto</a>
            <a href="#experiencia">Experiência</a>
            <a href="#roadmap">Roadmap</a>
          </div>
        </nav>

        <section id="inicio" className="hero-copy">
          <p className="eyebrow">vaidecarro.com</p>
          <h1>Mobilidade urbana simples, só com carros.</h1>
          <p>
            Um conceito de app para conectar passageiros e motoristas com estimativa de preço,
            disponibilidade em tempo real e uma experiência desenhada para cidades brasileiras.
          </p>
          <div className="hero-actions">
            <a href="#produto">Explorar produto</a>
            <span>Protótipo navegável em React</span>
          </div>
        </section>
      </header>

      <section id="produto" className="workspace-grid">
        <RideComposer
          places={places}
          originId={originId}
          destinationId={destinationId}
          rideClassId={rideClassId}
          onOriginChange={setOriginId}
          onDestinationChange={setDestinationId}
          onRideClassChange={setRideClassId}
          onRequestRide={handleRequestRide}
          fare={fare}
          distance={distance}
          duration={duration}
          bestDriver={bestDriver}
          canRequest={canRequest}
        />
        <MapPreview origin={origin} destination={destination} status={status} />
      </section>

      <section id="experiencia" className="secondary-grid">
        <DriverPanel
          bestDriver={bestDriver}
          demandLevel={demandLevel}
          onToggleDemand={handleToggleDemand}
          status={status}
        />
        <FeatureGrid />
      </section>

      <section id="roadmap" className="roadmap">
        <div>
          <p className="eyebrow">Próximas camadas</p>
          <h2>O MVP já nasce com trilho para virar produto real.</h2>
        </div>
        <ol>
          <li>Autenticação de passageiro e motorista</li>
          <li>Integração com mapas e geolocalização</li>
          <li>Pagamento, cupons e carteira digital</li>
          <li>Backend com despacho de corridas em tempo real</li>
        </ol>
      </section>
    </main>
  )
}

export default App
