function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      <div style={{ display: "flex", gap: "20px" }}>

        <div style={{ background: "#000000", padding: "20px", borderRadius: "10px" }}>
          <h3>Productos</h3>
          <p>120</p>
        </div>

        <div style={{ background: "#000000", padding: "20px", borderRadius: "10px" }}>
          <h3>Movimientos</h3>
          <p>58</p>
        </div>

        <div style={{ background: "#000000", padding: "20px", borderRadius: "10px" }}>
          <h3>Usuarios</h3>
          <p>4</p>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
