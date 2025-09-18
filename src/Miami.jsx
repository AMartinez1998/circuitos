import Circuito from "./circuito_generico";
import miami from "./assets/miami.png"; 

export default function Miami() {
  return (
    <Circuito 
      nombre="GP de Miami 2025"
      imagen={miami}
      referencias={[
        { curva: 1, frenada: "120m", marcha: "3ª", intensidad: "75%" },
        { curva: 11, frenada: "100m", marcha: "4ª", intensidad: "70%" },
        { curva: 17, frenada: "80m", marcha: "2ª", intensidad: "90%" },
      ]}
      setup={[
        "Alerón delantero: Medio",
        "Alerón trasero: Medio",
        "Suspensión: Media",
        "Frenos: Altos",
      ]}
      consejos="Cuidado en la chicane del sector 3 (curvas 14-15), es muy fácil perder el coche en la salida."
      estrategia="1 parada: iniciar con medios y terminar con duros."
      neumaticos="El calor en Miami castiga los neumáticos traseros, gestiona la tracción en curvas lentas."
      datos={{
        Vueltas: 57,
        Longitud: "5.412 km",
        Récord: "1:29.708 (Verstappen, 2023)"
      }}
    />
  );
}
