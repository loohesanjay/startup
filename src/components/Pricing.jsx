const USD_TO_INR = 91.69; // Conversion rate

export default function Pricing() {
  // Define plans with USD prices
  const plans = [
    { title: "Starter", priceUSD: 0 },
    { title: "Pro", priceUSD: 29 },
    { title: "Enterprise", priceUSD: 99 }
  ];

  return (
    <section style={styles.section}>
      <h2>Pricing</h2>
      <div style={styles.plans}>
        {plans.map((plan, index) => (
          <Plan 
            key={index} 
            title={plan.title} 
            priceUSD={plan.priceUSD} 
          />
        ))}
      </div>
    </section>
  )
}

function Plan({ title, priceUSD }) {
  const priceINR = priceUSD * USD_TO_INR; // Convert to INR
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p style={styles.price}>₹{priceINR.toFixed(0)}/mo</p>
      <button style={styles.button}>Choose</button>
    </div>
  )
}

const styles = {
  section: {
    padding: '60px 20px',
    textAlign: 'center'
  },
  plans: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '30px'
  },
  card: {
    background: '#1e293b',
    padding: '30px',
    borderRadius: '10px',
    width: '220px'
  },
  price: {
    fontSize: '2rem',
    margin: '15px 0'
  },
  button: {
    padding: '10px 20px',
    background: '#38bdf8',
    border: 'none',
    borderRadius: '6px'
  }
}
