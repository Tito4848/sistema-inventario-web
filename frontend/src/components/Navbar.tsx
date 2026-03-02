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
        <li>
          <Link to="/categorias" style={{ color: "white" }}>Categorias</Link>
        </li>
        <li>
          <Link to="/subcategorias" style={{ color: "white" }}>Subcategorias</Link>
        </li>
        <li>
          <Link to="/unidad_medida" style={{ color: "white" }}>Unidad Medida</Link>
        </li>
        <li>
          <Link to="/equivalencia" style={{ color: "white" }}>Equivalencia</Link>
        </li>
          <li>
          <Link to="/stock" style={{ color: "white" }}>Stock</Link>
        </li>
          <li>
          <Link to="/movimientos" style={{ color: "white" }}>Movimientos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
