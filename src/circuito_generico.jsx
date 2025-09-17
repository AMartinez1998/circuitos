export default function Circuito({ 
  nombre, 
  imagen, 
  referencias, 
  setup, 
  consejos, 
  estrategia, 
  neumaticos, 
  datos 
}) {
  return (
    <div className="circuito-container">
      <h2 className="circuito-titulo">{nombre}</h2>
      
      <img src={imagen} alt={nombre} className="circuito-imagen" />

      <h3>Referencias de frenada</h3>
      <table className="circuito-tabla">
        <thead>
          <tr>
            <th>Curva</th>
            <th>Punto de frenada</th>
            <th>Marcha</th>
            <th>Intensidad</th>
          </tr>
        </thead>
        <tbody>
          {referencias.map((ref, i) => (
            <tr key={i}>
              <td>{ref.curva}</td>
              <td>{ref.frenada}</td>
              <td>{ref.marcha}</td>
              <td>{ref.intensidad}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Set up recomendado</h3>
      <ul className="circuito-lista">
        {setup.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3>Consejos de conducción</h3>
      <p className="circuito-texto">{consejos}</p>

      <h3>Estrategia de carrera</h3>
      <p className="circuito-texto">{estrategia}</p>

      <h3>Ahorro de neumáticos</h3>
      <p className="circuito-texto">{neumaticos}</p>

      <h3>Datos del circuito</h3>
      <ul className="circuito-datos">
        {Object.entries(datos).map(([clave, valor]) => (
          <li key={clave}><strong>{clave}:</strong> {valor}</li>
        ))}
      </ul>
    </div>
  );
}
