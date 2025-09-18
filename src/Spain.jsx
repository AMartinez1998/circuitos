import Circuito from "./circuito_generico";
import Spain from "./assets/Spain.avif"; 

export default function Espana() {
  return (
    <Circuito 
      nombre="GP de España 2025"
      imagen={Spain}
      referencias={[
        { curva: 1, frenada: "120m", marcha: "3ª", intensidad: "70%" },
        { curva: 9, frenada: "100m", marcha: "4ª", intensidad: "75%" },
        { curva: 14, frenada: "80m", marcha: "2ª", intensidad: "80%" },
      ]}
      setup={[
        "Alerón delantero: Medio",
        "Alerón trasero: Medio",
        "Suspensión: Media",
        "Frenos: Altos",
      ]}
      consejos="Circuito con largas rectas y varias curvas técnicas; atención en la última curva para salir bien a la recta principal."
      estrategia="1 parada: iniciar con blandos y terminar con medios o duros según el ritmo de carrera."
      neumaticos="Cuidar neumáticos traseros en el tercer sector donde hay varias curvas rápidas seguidas."
      datos={{
        Vueltas: 66,
        Longitud: "4.675 km",
        Récord: "1:18.149 (Vettel, 2020)"
      }}
    />
  );
}
