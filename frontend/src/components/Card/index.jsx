import SCard from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";
import { useState } from "react";

export default function Card(props) {
  const { money, setMoney } = useContext(statsContext);
  const [nb, setNb] = useState(0);

  const incrementMoney = () => setMoney(money + props.cout_achat);
  const deIncrementMoney = () => setMoney(money - props.cout_achat);

  return (
    <SCard>
      <h1>{props.nom}</h1>
      <ul>
        <li>Profits : {props.profit}€</li>
        <li>PEF : {props.impact_ecologique}kg CO2 eq/kg</li>
        <li>Production : {props.production}</li>
        <li>
          <button
            onClick={() => {
              deIncrementMoney();
              setNb(nb - 1);
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              incrementMoney();
              setNb(nb + 1);
            }}
          >
            +
          </button>
          <p>{nb}</p>
        </li>
      </ul>
      <img src={props.image} alt="img" />
      <h2>Prix d'achat :{props.cout_achat}€</h2>
    </SCard>
  );
}
