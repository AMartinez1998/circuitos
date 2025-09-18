import Circuito from "./circuito_generico";
import monza from "./assets/monza.avif"; // asegúrate de tener la imagen en assets

export default function Monza() {
  return (
    <Circuito 
      nombre="GP de Italia 2025"
      imagen={monza}
      referencias={[
        { curva: 1, frenada: "90m", marcha: "4ª", intensidad: "85%" },
        { curva: 4, frenada: "100m", marcha: "3ª", intensidad: "80%" },
        { curva: 11, frenada: "120m", marcha: "2ª", intensidad: "90%" },
      ]}
      setup={[
        "Alerón delantero: Bajo",
        "Alerón trasero: Bajo",
        "Suspensión: Dura",
        "Frenos: Altos",
      ]}
      consejos="Circuito muy rápido con largas rectas; atención en las curvas 1 y 11 para no perder tiempo en la salida."
      estrategia="1 parada: iniciar con medios y terminar con duros."
      neumaticos="Cuidar los neumáticos traseros en las chicanes y curvas lentas."
      datos={{
        Vueltas: 53,
        Longitud: "5.793 km",
        Récord: "1:21.046 (Bottas, 2020)"
      }}
    />
  );
}
