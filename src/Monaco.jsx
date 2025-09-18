import Circuito from "./circuito_generico";
import monaco from "./assets/monaco.avif"; 

export default function Monaco() {
  return (
    <Circuito 
      nombre="GP de Mónaco 2025"
      imagen={monaco}
      referencias={[
        { curva: 1, frenada: "80m", marcha: "2ª", intensidad: "90%" },
        { curva: 10, frenada: "70m", marcha: "3ª", intensidad: "85%" },
        { curva: 15, frenada: "60m", marcha: "2ª", intensidad: "95%" },
      ]}
      setup={[
        "Alerón delantero: Alto",
        "Alerón trasero: Alto",
        "Suspensión: Blanda",
        "Frenos: Altos",
      ]}
      consejos="Circuito urbano extremadamente estrecho, cuidado con los muros en la curva de la piscina y Sainte Dévote."
      estrategia="1 parada: iniciar con blandos y cambiar a medios."
      neumaticos="Cuidar la temperatura de los neumáticos traseros y evitar bloqueos en las curvas lentas."
      datos={{
        Vueltas: 78,
        Longitud: "3.337 km",
        Récord: "1:12.909 (Hamilton, 2021)"
      }}
    />
  );
}
