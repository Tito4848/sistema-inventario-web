import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Productos from "./pages/Productos"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
