function Productos() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Productos</h2>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Laptop</td>
            <td>5</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Mouse</td>
            <td>15</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default Productos
