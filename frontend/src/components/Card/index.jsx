import SCard from "./style";

export default function Card(props) {
  return (
    <SCard>
      <h1>{props.name}</h1>
      <ul>
        <li>Profits : {props.profit}€</li>
        <li>PEF : {props.impact_ecologique}kg CO2 eq/kg</li>
        <li>
          <button>-</button>
          <button>+</button>
        </li>
        <li>{props.production}</li>
      </ul>
      <img src={props.image} alt="img" />
      <h2>Prix d'achat :{props.cout_achat}€</h2>
    </SCard>
  );
}
