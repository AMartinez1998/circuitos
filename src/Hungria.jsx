import Circuito from "./circuito_generico";
import hungria from "./assets/hungria.avif"; // asegúrate de tener la imagen en assets

export default function Hungria() {
  return (
    <Circuito 
      nombre="GP de Hungría 2025"
      imagen={hungria}
      referencias={[
        { curva: 1, frenada: "60m", marcha: "3ª", intensidad: "75%" },
        { curva: 4, frenada: "80m", marcha: "2ª", intensidad: "80%" },
        { curva: 12, frenada: "90m", marcha: "3ª", intensidad: "85%" },
      ]}
      setup={[
        "Alerón delantero: Alto",
        "Alerón trasero: Medio",
        "Suspensión: Media",
        "Frenos: Altos",
      ]}
      consejos="Circuito estrecho y técnico, difícil adelantar. Atención a la salida de curva 1 y la última curva para salir bien a la recta."
      estrategia="1 parada: iniciar con blandos y terminar con medios."
      neumaticos="Cuidar los neumáticos traseros en curvas lentas y medias, especialmente en el segundo sector."
      datos={{
        Vueltas: 70,
        Longitud: "4.381 km",
        Récord: "1:16.627 (Hamilton, 2020)"
      }}
    />
  );
}
