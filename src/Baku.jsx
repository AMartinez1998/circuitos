import Circuito from "./circuito_generico";
import baku from "./assets/baku.png"; // asegúrate de tener la imagen en assets

export default function Baku() {
  return (
    <Circuito 
      nombre="GP de Azerbaiyán 2025"
      imagen={baku}
      referencias={[
        { curva: 1, frenada: "70m", marcha: "2ª", intensidad: "85%" },
        { curva: 8, frenada: "90m", marcha: "3ª", intensidad: "80%" },
        { curva: 16, frenada: "100m", marcha: "2ª", intensidad: "90%" },
      ]}
      setup={[
        "Alerón delantero: Medio",
        "Alerón trasero: Medio",
        "Suspensión: Media",
        "Frenos: Altos",
      ]}
      consejos="Circuito urbano muy rápido con muros cerca; cuidado en la curva 1 y la larga recta tras curva 15 donde se alcanzan altas velocidades."
      estrategia="1 parada: iniciar con blandos y terminar con medios o duros según el desgaste."
      neumaticos="Gestionar neumáticos traseros en curvas lentas y medias; el calor en la recta principal puede desgastarlos rápido."
      datos={{
        Vueltas: 51,
        Longitud: "6.003 km",
        Récord: "1:41.218 (Hamilton, 2019)"
      }}
    />
  );
}
