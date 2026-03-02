import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#1e293b", color: "white" }}>
      <h2>Sistema Inventario</h2>

      <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
        <li>
          <Link to="/" style={{ color: "white" }}>Dashboard</Link>
        </li>

        <li>
          <Link to="/productos" style={{ color: "white" }}>Productos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
