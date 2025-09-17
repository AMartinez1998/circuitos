import Circuito from "./circuito_generico";
import china from "./assets/china.png"; // reemplaza con tu imagen real

export default function China() {
  return (
    <Circuito 
      nombre="GP de China 2025"
      imagen={china}
      referencias={[
        { curva: 1, frenada: "150m", marcha: "2ª", intensidad: "80%" },
        { curva: 6, frenada: "120m", marcha: "3ª", intensidad: "75%" },
        { curva: 11, frenada: "100m", marcha: "2ª", intensidad: "85%" },
        { curva: 14, frenada: "110m", marcha: "2ª", intensidad: "90%" },
      ]}
      setup={[
        "Alerón delantero: Medio-Alto",
        "Alerón trasero: Medio-Alto",
        "Suspensión: Media",
        "Frenos: Altos",
        "Presión neumáticos: 23 psi delanteros / 21 psi traseros"
      ]}
      consejos="El primer sector es muy técnico, especialmente la larga curva 1-2 en espiral; gestiona bien la trazada para no comprometer la salida hacia la recta. La recta trasera es ideal para adelantamientos con DRS."
      estrategia="1 o 2 paradas: iniciar con medios, pasar a duros. Alternativa: blandos en clasificación y un stint corto si hay Safety Car temprano."
      neumaticos="La recta larga calienta mucho los neumáticos traseros; controla la tracción en la salida de la curva 13 para evitar sobrecalentamiento."
      datos={{
        Vueltas: 56,
        Longitud: "5.451 km",
        Curvas: 16,
        Récord: "1:32.238 (Michael Schumacher, 2004)",
        Altitud: "4 m sobre el nivel del mar"
      }}
    />
  );
}
