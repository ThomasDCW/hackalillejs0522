import SCard from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";
import { useState } from "react";
import useInterval from "./../../services/contexts/useInterval";

export default function Card(props) {
  const {
    money,
    setMoney,
    timerActive,
    earth,
    setEarth,
    annualProfit,
    setAnnualProfit,
  } = useContext(statsContext);

  const [nb, setNb] = useState(0);
  useInterval(() => {
    if (timerActive) setMoney(money + props.profit * nb);
  }, 5000);

  useInterval(() => {
    if (annualProfit > 1) {
      return annualProfit;
    }
    if (timerActive) setAnnualProfit(props.profit * nb);
  }, 5000);

  useInterval(() => {
    if (timerActive) setEarth(earth + props.impact_ecologique * nb);
  }, 5000);

  const incrementMoney = () => {
    setMoney(money + props.cout_achat * 0.8);
  };
  const deIncrementMoney = () => {
    setMoney(money - props.cout_achat);
  };
  const incrementAnnualProfit = () => {
    setAnnualProfit(annualProfit + props.profit);
  };
  const deincrementAnnualProfit = () => {
    setAnnualProfit(annualProfit - props.profit);
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
        <li>
          Profits : {props.profit}€/<span>an</span>
        </li>
        <li>
          PEF : {props.impact_ecologique}kg CO2 eq/<span>kg</span>
        </li>
        <li>
          <button
            className="plus"
            onClick={() => {
              deIncrementMoney();
              incrementAnnualProfit();
              deIncrementEarth();
              setNb(nb + 1);
            }}
          >
            Acheter pour <br />
            {props.cout_achat} €
          </button>
        </li>
        <h2>{nb}</h2>
      </ul>
      <img src={props.image} alt="img" />
    </SCard>
  );
}
