import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to My Courses</h1>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h2>CS303</h2>
          <Link to="/cs303">
            <button style={styles.button}>Go to CS303</button>
          </Link>
        </div>

        <div style={styles.card}>
          <h2>CS309</h2>
          <Link to="/cs309">
            <button style={styles.button}>Go to CS309</button>
          </Link>
        </div>

        <div style={styles.card}>
          <h2>CS202</h2>
          <Link to="/cs202">
            <button style={styles.button}>Go to CS202</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },

  title: {
    fontSize: "32px",
    color: "orange",
    marginBottom: "40px",
  },

  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap" as const,
    justifyContent: "center",
  },

  card: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center" as const,
    width: "200px",
  },

  button: {
    marginTop: "10px",
    padding: "10px",
    width: "100%",
    backgroundColor: "orange",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default HomePage;