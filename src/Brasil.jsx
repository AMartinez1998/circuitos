import Circuito from "./circuito_generico";
import brasil from "./assets/brasil.png"; // reemplaza con tu imagen real

export default function Brasil() {
  return (
    <Circuito 
      nombre="GP de Brasil 2025"
      imagen={brasil}
      referencias={[
        { curva: 1, frenada: "100m", marcha: "3ª", intensidad: "85%" }, // S de Senna
        { curva: 4, frenada: "110m", marcha: "3ª", intensidad: "80%" }, // Descida do Lago
        { curva: 8, frenada: "90m", marcha: "2ª", intensidad: "85%" },  // Pinheirinho
        { curva: 12, frenada: "120m", marcha: "3ª", intensidad: "80%" }, // Juncao
      ]}
      setup={[
        "Alerón delantero: Medio",
        "Alerón trasero: Medio-Alto",
        "Suspensión: Media",
        "Frenos: Medios",
        "Presión neumáticos: 23 psi delanteros / 21 psi traseros"
      ]}
      consejos="Interlagos es un circuito corto pero muy técnico. La subida desde Junção hasta la recta de meta es clave para adelantar. El S de Senna es una zona crítica para las salidas y los adelantamientos."
      estrategia="2 paradas suele ser lo ideal: iniciar con blandos, luego medios y terminar con blandos o duros dependiendo de la degradación."
      neumaticos="La pista tiene asfalto abrasivo, lo que genera desgaste alto en los neumáticos traseros. Vigila la tracción en la salida de las curvas lentas."
      datos={{
        Vueltas: 71,
        Longitud: "4.309 km",
        Curvas: 15,
        Récord: "1:10.540 (Valtteri Bottas, 2018)",
        Altitud: "800 m sobre el nivel del mar"
      }}
    />
  );
}
