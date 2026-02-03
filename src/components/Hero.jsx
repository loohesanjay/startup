export default function Hero() {
  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>
        Launch Your Startup Faster
      </h1>
      <p style={styles.text}>
        Everything you need to build, launch, and grow your product.
      </p>
      <button style={styles.button}>
        Get Started
      </button>
    </section>
  )
}

const styles = {
  hero: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    maxWidth: '500px'
  },
  button: {
    padding: '15px 30px',
    fontSize: '1rem',
    background: '#38bdf8',
    border: 'none',
    borderRadius: '8px'
  }
}
