import Circuito from "./circuito_generico";
import singapour from "./assets/singapour.webp"; // asegúrate de tener la imagen en assets

export default function Singapour() {
  return (
    <Circuito 
      nombre="GP de Singapur 2025"
      imagen={singapour}
      referencias={[
        { curva: 1, frenada: "60m", marcha: "2ª", intensidad: "90%" },
        { curva: 7, frenada: "50m", marcha: "3ª", intensidad: "85%" },
        { curva: 10, frenada: "70m", marcha: "2ª", intensidad: "95%" },
      ]}
      setup={[
        "Alerón delantero: Alto",
        "Alerón trasero: Alto",
        "Suspensión: Blanda",
        "Frenos: Altos",
      ]}
      consejos="Circuito urbano nocturno muy técnico; cuidado con los muros y la falta de margen de error, especialmente en la curva 10."
      estrategia="1 parada: iniciar con blandos y cambiar a medios."
      neumaticos="Controlar temperatura de los neumáticos traseros por el calor y la humedad de la noche."
      datos={{
        Vueltas: 61,
        Longitud: "5.063 km",
        Récord: "1:36.015 (Ricciardo, 2019)"
      }}
    />
  );
}
