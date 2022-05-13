import SCard from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";
import { useState } from "react";
import useInterval from "./../../services/contexts/useInterval";

export default function Card(props) {

  const { money, setMoney, timerActive, earth, setEarth } =
    useContext(statsContext);

  const [nb, setNb] = useState(0);
  useInterval(() => {
    if (timerActive) setMoney(money + props.profit * nb);
  }, 5000);
  useInterval(() => {
    if (timerActive) setEarth(earth + props.impact_ecologique * nb);
  }, 5000);

  const incrementMoney = () => {
    setMoney(money + props.cout_achat);
  };
  const deIncrementMoney = () => {
    setMoney(money - props.cout_achat);
  };

  const incrementEarth = () => {
    setEarth(earth - props.impact_ecologique);
  };
  const deIncrementEarth = () => {
    setEarth(earth + props.impact_ecologique);
  };


  return (
    <SCard>
      <h1>{props.nom}</h1>
      <ul>
        <li>Profits : {props.profit}€</li>
        <li>PEF : {props.impact_ecologique}kg CO2 eq/kg</li>
        <li>Production : {props.production}</li>
        <li>
          <button
            className="moin"
            onClick={() => {
              if (nb === 0) {
                return setMoney(money);
              }
              incrementMoney();
              incrementEarth();
              setNb(nb - 1);
            }}
          >
            -
          </button>
          <button
            className="plus"
            onClick={() => {
              deIncrementMoney();
              deIncrementEarth();
              setNb(nb + 1);
            }}
          >
            +
          </button>
        </li>
        <h2>{nb}</h2>
      </ul>
      <img src={props.image} alt="img" />
      <h2>Prix d'achat :{props.cout_achat}€</h2>
    </SCard>
  );
}
