function Subcategorias() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Subcategorias</h2>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoria</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Laptop</td>
            <td>Tecnologia</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Mouse</td>
            <td>Tecnologia</td>
           </tr> 
        </tbody>
      </table>
    </div>
  )
}

export default Subcategorias
