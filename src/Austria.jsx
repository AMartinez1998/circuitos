import Circuito from "./circuito_generico";
import austria from "./assets/austria.png";


export default function Austria() {
  return (
    <Circuito 
      nombre="GP de Austria 2025"
      imagen={austria}
      referencias={[
        { curva: 1, frenada: "100m", marcha: "3ª", intensidad: "70%" },
        { curva: 3, frenada: "120m", marcha: "2ª", intensidad: "90%" },
      ]}
      setup={[
        "Alerón delantero: Medio",
        "Alerón trasero: Bajo",
        "Suspensión: Media",
        "Frenos: Altos",
      ]}
      consejos="Ataca fuerte en las rectas, pero cuidado con la curva 3 donde se tiende a bloquear."
      estrategia="1 parada: iniciar con medios y terminar con duros."
      neumaticos="Ahorrar en sector 2 donde más sufren."
      datos={{
        Vueltas: 71,
        Longitud: "4.318 km",
        Récord: "1:05.619 (Sainz, 2020)"
      }}
    />
  );
}
