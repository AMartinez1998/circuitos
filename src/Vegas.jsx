import Circuito from "./circuito_generico";
import vegas from "./assets/vegas.avif"; 

export default function LasVegas() {
  return (
    <Circuito 
      nombre="GP de Las Vegas 2025"
      imagen={vegas}
      referencias={[
        { curva: 1, frenada: "100m", marcha: "3ª", intensidad: "90%" },
        { curva: 5, frenada: "120m", marcha: "4ª", intensidad: "80%" },
        { curva: 12, frenada: "90m", marcha: "2ª", intensidad: "95%" },
        { curva: 14, frenada: "150m", marcha: "3ª", intensidad: "85%" },
      ]}
      setup={[
        "Alerón delantero: Medio",
        "Alerón trasero: Medio",
        "Suspensión: Media",
        "Frenos: Altos",
      ]}
      consejos="Circuito urbano con largas rectas en el Strip, ideal para velocidad punta, pero cuidado con las frenadas fuertes en las horquillas."
      estrategia="1 o 2 paradas según degradación: iniciar con medios y cambiar a duros."
      neumaticos="Las largas rectas enfrían los neumáticos, atención a mantener temperatura antes de las frenadas fuertes."
      datos={{
        Vueltas: 50,
        Longitud: "6.201 km",
        Récord: "1:35.490 (Sainz, 2023)"
      }}
    />
  );
}
