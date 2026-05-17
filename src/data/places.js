export const places = [
  {
    id: 'teatro-amazonas',
    name: 'Teatro Amazonas',
    district: 'Centro',
    coordinates: { x: 22, y: 31 },
  },
  {
    id: 'ponta-negra',
    name: 'Ponta Negra',
    district: 'Ponta Negra',
    coordinates: { x: 78, y: 22 },
  },
  {
    id: 'aeroporto',
    name: 'Aeroporto Eduardo Gomes',
    district: 'Tarumã',
    coordinates: { x: 18, y: 76 },
  },
  {
    id: 'manauara',
    name: 'Manauara Shopping',
    district: 'Adrianópolis',
    coordinates: { x: 58, y: 48 },
  },
  {
    id: 'ufam',
    name: 'UFAM',
    district: 'Coroado',
    coordinates: { x: 76, y: 76 },
  },
  {
    id: 'vieiralves',
    name: 'Vieiralves',
    district: 'Nossa Senhora das Graças',
    coordinates: { x: 48, y: 28 },
  },
]

export const rideClasses = [
  {
    id: 'economico',
    label: 'Econômico',
    multiplier: 1,
    etaBoost: 0,
    description: 'Bom preço para o dia a dia',
  },
  {
    id: 'conforto',
    label: 'Conforto',
    multiplier: 1.22,
    etaBoost: -1,
    description: 'Carros mais novos e espaço extra',
  },
  {
    id: 'executivo',
    label: 'Executivo',
    multiplier: 1.48,
    etaBoost: -2,
    description: 'Chegada elegante para ocasiões especiais',
  },
]

export const nearbyDrivers = [
  { id: 1, name: 'Ana', rating: 4.96, model: 'Onix Plus', eta: 3, position: { x: 30, y: 44 } },
  { id: 2, name: 'Rafael', rating: 4.91, model: 'Corolla', eta: 5, position: { x: 44, y: 63 } },
  { id: 3, name: 'Bianca', rating: 4.98, model: 'HB20S', eta: 4, position: { x: 67, y: 39 } },
]
