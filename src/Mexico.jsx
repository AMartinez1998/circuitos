import Circuito from "./circuito_generico";
import mexico from "./assets/mexico.avif"; 

export default function Mexico() {
  return (
    <Circuito 
      nombre="GP de México 2025"
      imagen={mexico}
      referencias={[
        { curva: 1, frenada: "150m", marcha: "2ª", intensidad: "80%" },
        { curva: 3, frenada: "120m", marcha: "3ª", intensidad: "75%" },
        { curva: 4, frenada: "100m", marcha: "3ª", intensidad: "70%" },
        { curva: 7, frenada: "130m", marcha: "2ª", intensidad: "85%" },
      ]}
      setup={[
        "Alerón delantero: Medio",
        "Alerón trasero: Medio",
        "Suspensión: Blanda",
        "Frenos: Medios",
        "Presión neumáticos: 22 psi delanteros / 20 psi traseros"
      ]}
      consejos="El estadio es muy técnico; mantén la trazada limpia en curvas lentas. Aprovecha las rectas para adelantar y gestiona la altitud para no perder rendimiento del motor."
      estrategia="2 paradas: iniciar con blandos, luego medios, terminar con duros. Ajusta estrategia según desgaste de neumáticos y tráfico en pista."
      neumaticos="Gestionar desgaste en el primer stint, ya que la altitud degrada más los neumáticos delanteros."
      datos={{
        Vueltas: 71,
        Longitud: "4.304 km",
        Curvas: 17,
        Récord: "1:17.774 (Bottas, 2021)",
        Altitud: "2240 m sobre el nivel del mar"
      }}
    />
  );
}
