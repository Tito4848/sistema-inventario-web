function Categorias() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Categorias</h2>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Laptop</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Mouse</td>
           </tr> 
        </tbody>
      </table>
    </div>
  )
}

export default Categorias
