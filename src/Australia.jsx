import Circuito from "./circuito_generico";
import australia from "./assets/australia.avif"; // reemplaza con tu imagen real

export default function Australia() {
  return (
    <Circuito 
      nombre="GP de Australia 2025"
      imagen={australia}
      referencias={[
        { curva: 1, frenada: "120m", marcha: "3ª", intensidad: "85%" }, // Primer chicane
        { curva: 3, frenada: "100m", marcha: "2ª", intensidad: "90%" }, // Curva de frenada fuerte
        { curva: 9, frenada: "80m", marcha: "4ª", intensidad: "85%" },  // Chicane rápida
        { curva: 13, frenada: "110m", marcha: "3ª", intensidad: "88%" }, // Curva final antes de meta
      ]}
      setup={[
        "Alerón delantero: Medio",
        "Alerón trasero: Medio",
        "Suspensión: Media-Dura",
        "Frenos: Altos",
        "Presión neumáticos: 22 psi delanteros / 20 psi traseros"
      ]}
      consejos="Albert Park es un circuito semiurbano con muchas curvas rápidas y frenadas fuertes. La tracción a la salida de la curva 3 y la estabilidad en la chicane de alta velocidad (curvas 9-10) son claves para una vuelta rápida."
      estrategia="Normalmente 1 parada: iniciar con medios y terminar con duros, aunque una segunda parada puede ser útil si hay Safety Car."
      neumaticos="El asfalto liso provoca menos desgaste, pero hay que mantener temperatura en los neumáticos, sobre todo en las primeras vueltas."
      datos={{
        Vueltas: 58,
        Longitud: "5.278 km",
        Curvas: 14,
        Récord: "1:20.260 (Charles Leclerc, 2022)",
        Altitud: "10 m sobre el nivel del mar"
      }}
    />
  );
}
