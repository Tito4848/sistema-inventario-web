function Equivalencia() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Equivalencia</h2>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Unidad_base</th>
            <th>Unidad_equivalente</th>
            <th>Factor</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Laptop</td>
            <td>Unidad</td>
            <td>Caja</td>
            <td>10</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Mouse</td>
            <td>Unidad</td>
            <td>Caja</td>
            <td>10</td>
           </tr> 
        </tbody>
      </table>
    </div>
  )
}

export default Equivalencia
