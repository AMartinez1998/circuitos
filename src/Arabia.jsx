import Circuito from "./circuito_generico";
import arabia from "./assets/arabia.png"; 

export default function ArabiaSaudi() {
  return (
    <Circuito 
      nombre="GP de Arabia Saudí 2025"
      imagen={arabia}
      referencias={[
        { curva: 1, frenada: "100m", marcha: "3ª", intensidad: "80%" },
        { curva: 13, frenada: "90m", marcha: "4ª", intensidad: "70%" },
        { curva: 27, frenada: "110m", marcha: "2ª", intensidad: "85%" },
      ]}
      setup={[
        "Alerón delantero: Bajo",
        "Alerón trasero: Medio",
        "Suspensión: Blanda",
        "Frenos: Altos",
      ]}
      consejos="Circuito urbano muy rápido, ojo con los muros en curvas de alta velocidad."
      estrategia="1 parada: iniciar con blandos y terminar con medios."
      neumaticos="Cuidar especialmente los neumáticos traseros en las curvas rápidas."
      datos={{
        Vueltas: 50,
        Longitud: "6.174 km",
        Récord: "1:30.734 (Hamilton, 2021)"
      }}
    />
  );
}
