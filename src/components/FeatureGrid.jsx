const features = [
  {
    title: 'Somente carros',
    text: 'Posicionamento claro: nada de moto ou entrega. O produto nasce focado em corridas de carro.',
  },
  {
    title: 'Preço transparente',
    text: 'Estimativa baseada em distância, duração, categoria e nível de demanda.',
  },
  {
    title: 'Experiência dupla',
    text: 'Fluxo do passageiro e painel do motorista no mesmo protótipo para mostrar visão de produto.',
  },
  {
    title: 'Pronto para evoluir',
    text: 'A arquitetura já deixa espaço para API real, autenticação, pagamentos e mapas.',
  },
]

export default function FeatureGrid() {
  return (
    <section className="feature-grid">
      {features.map((feature) => (
        <article key={feature.title}>
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </article>
      ))}
    </section>
  )
}
