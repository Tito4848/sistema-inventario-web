function Stock() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Stock</h2>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Unidad</th>
            <th>Cantidad</th>
            <th>Fecha</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Laptop</td>
            <td>Unidad</td>
            <td>10</td>
            <td>02-03-2026</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Mouse</td>
            <td>Unidad</td>
            <td>Caja</td>
            <td>02-03-2026</td>
           </tr> 
        </tbody>
      </table>
    </div>
  )
}

export default Stock
