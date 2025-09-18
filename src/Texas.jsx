import Circuito from "./circuito_generico";
import texas from "./assets/texas.avif"; 

export default function Austin() {
  return (
    <Circuito 
      nombre="GP de Estados Unidos 2025"
      imagen={texas}
      referencias={[
        { curva: 1, frenada: "120m", marcha: "3ª", intensidad: "80%" },
        { curva: 11, frenada: "100m", marcha: "4ª", intensidad: "85%" },
        { curva: 16, frenada: "90m", marcha: "2ª", intensidad: "90%" },
      ]}
      setup={[
        "Alerón delantero: Medio",
        "Alerón trasero: Medio",
        "Suspensión: Media",
        "Frenos: Altos",
      ]}
      consejos="Circuito con curvas técnicas y largas rectas; cuidado en la curva 1 y la sección técnica final (curvas 16-19)."
      estrategia="1 parada: iniciar con blandos y cambiar a medios o duros según el desgaste."
      neumaticos="Gestionar los neumáticos traseros en la sección final y en la curva 11 donde se exige mucha tracción."
      datos={{
        Vueltas: 56,
        Longitud: "5.513 km",
        Récord: "1:36.169 (Vettel, 2019)"
      }}
    />
  );
}
