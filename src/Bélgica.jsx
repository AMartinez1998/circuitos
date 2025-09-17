import Circuito from "./circuito_generico";
import belgica from "./assets/belgica.avif"; // reemplaza con tu imagen real

export default function Belgica() {
  return (
    <Circuito 
      nombre="GP de Bélgica 2025"
      imagen={belgica}
      referencias={[
        { curva: 1, frenada: "120m", marcha: "2ª", intensidad: "85%" }, // La Source
        { curva: 5, frenada: "100m", marcha: "3ª", intensidad: "80%" }, // Les Combes
        { curva: 10, frenada: "140m", marcha: "3ª", intensidad: "75%" }, // Pouhon
        { curva: 18, frenada: "90m", marcha: "2ª", intensidad: "90%" },  // Chicane final
      ]}
      setup={[
        "Alerón delantero: Bajo-Medio",
        "Alerón trasero: Bajo",
        "Suspensión: Media",
        "Frenos: Altos",
        "Presión neumáticos: 23 psi delanteros / 21 psi traseros"
      ]}
      consejos="Spa combina curvas rápidas con rectas largas. Eau Rouge y Raidillon requieren confianza y buena carga aerodinámica. Aprovecha el rebufo en la recta de Kemmel para adelantar."
      estrategia="2 paradas: iniciar con medios, luego blandos y terminar con duros. Alternativa: 1 parada si hay baja degradación y Safety Car."
      neumaticos="La alta velocidad castiga mucho los neumáticos, sobre todo el tren delantero en Eau Rouge. Controla la presión para evitar sobrecalentamiento."
      datos={{
        Vueltas: 44,
        Longitud: "7.004 km",
        Curvas: 19,
        Récord: "1:46.286 (Valtteri Bottas, 2018)",
        Altitud: "401 m sobre el nivel del mar"
      }}
    />
  );
}
