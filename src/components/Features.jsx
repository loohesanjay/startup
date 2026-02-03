export default function Features() {
  const features = [
    'Fast Performance',
    'Secure by Default',
    'Beautiful UI',
    'Built to Scale'
  ]

  return (
    <section style={styles.section}>
      <h2>Features</h2>
      <div style={styles.list}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              animationDelay: `${index * 0.2}s`
            }}
            className="feature-card"
          >
            {feature}
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '60px 20px',
    textAlign: 'center'
  },
  list: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '30px'
  },
  card: {
    background: '#1e293b',
    padding: '20px',
    borderRadius: '10px',
    minWidth: '200px',
    animation: 'fadeUp 0.6s ease forwards',
    opacity: 0
  }
}
