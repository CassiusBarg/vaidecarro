const BASE_FARE = 6.5
const PRICE_PER_KM = 2.35
const PRICE_PER_MINUTE = 0.42

export function estimateDistance(origin, destination) {
  if (!origin || !destination || origin.id === destination.id) {
    return 0
  }

  const dx = origin.coordinates.x - destination.coordinates.x
  const dy = origin.coordinates.y - destination.coordinates.y
  return Number((Math.sqrt(dx ** 2 + dy ** 2) / 6.8).toFixed(1))
}

export function estimateDuration(distance) {
  if (!distance) {
    return 0
  }

  return Math.max(6, Math.round(distance * 2.45))
}

export function estimateFare({ distance, duration, multiplier, demandLevel }) {
  if (!distance || !duration) {
    return 0
  }

  const surge = demandLevel === 'alta' ? 1.18 : demandLevel === 'moderada' ? 1.08 : 1
  const fare = (BASE_FARE + distance * PRICE_PER_KM + duration * PRICE_PER_MINUTE) * multiplier * surge
  return Number(fare.toFixed(2))
}
