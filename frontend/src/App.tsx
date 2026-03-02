import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Productos from "./pages/Productos"
import Categorias from "./pages/Categoria"
import Subcategorias from "./pages/Subcategorias"
import Unidad_medida from "./pages/Unidad_medida"
import Equivalencia from "./pages/Equivalencia"
import Stock from "./pages/Stock"
import Movimientos from "./pages/Movimientos"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/subcategorias" element={<Subcategorias />} />
        <Route path="/unidad_medida" element={<Unidad_medida />} />
        <Route path="/equivalencia" element={<Equivalencia />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/movimientos" element={<Movimientos />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
