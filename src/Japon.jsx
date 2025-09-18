import Circuito from "./circuito_generico";
import japan from "./assets/japan.avif"; 

export default function Japon() {
  return (
    <Circuito 
      nombre="GP de Japón 2025"
      imagen={japan}
      referencias={[
        { curva: 1, frenada: "100m", marcha: "3ª", intensidad: "75%" }, 
        { curva: 11, frenada: "90m", marcha: "2ª", intensidad: "85%" }, 
        { curva: 13, frenada: "120m", marcha: "3ª", intensidad: "80%" }, 
        { curva: 16, frenada: "130m", marcha: "2ª", intensidad: "90%" }, 
      ]}
      setup={[
        "Alerón delantero: Medio-Alto",
        "Alerón trasero: Medio-Alto",
        "Suspensión: Dura",
        "Frenos: Medios",
        "Presión neumáticos: 22 psi delanteros / 20 psi traseros"
      ]}
      consejos="Suzuka es un circuito muy técnico y exigente físicamente. Las 'S' del primer sector requieren precisión absoluta en la trazada. Spoon y 130R son claves para preparar adelantamientos en la recta principal."
      estrategia="1 o 2 paradas: iniciar con medios, pasar a duros. Si hay Safety Car temprano, se puede arriesgar con blandos + duros."
      neumaticos="El primer sector degrada mucho el tren delantero, especialmente el neumático delantero izquierdo. Controla las presiones y evita el sobrecalentamiento en 130R."
      datos={{
        Vueltas: 53,
        Longitud: "5.807 km",
        Curvas: 18,
        Récord: "1:30.983 (Lewis Hamilton, 2019)",
        Altitud: "45 m sobre el nivel del mar"
      }}
    />
  );
}
