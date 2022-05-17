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
    eau,
    setEau,
    sol,
    setSol,
    energie,
    setEnergie,
  } = useContext(statsContext);

  const [nb, setNb] = useState(0);
  //========  actualisation chaque année  ========//
  useInterval(() => {
    if (timerActive) setMoney(money + props.profit * nb);
  }, 5000);

  useInterval(() => {
    if (annualProfit > 1) {
      return annualProfit;
    }
    if (timerActive) setAnnualProfit(props.profit * nb);
  }, 5000);
  //========  actualisation chaque année des stats  ========//
  useInterval(() => {
    if (timerActive) setEarth(earth + props.impact_ecologique * nb);
  }, 5000);
  useInterval(() => {
    if (timerActive) setEau(eau + props.consommation_eau * nb);
  }, 5000);
  useInterval(() => {
    if (timerActive) setEnergie(energie + props.consommation_energetique * nb);
  }, 5000);
  useInterval(() => {
    if (timerActive) setSol(sol + props.utilisation_sol * nb);
  }, 5000);

  //========  €  =======//
  const incrementMoney = () => {
    setMoney(money + props.cout_achat * 0.8);
  };
  const deIncrementMoney = () => {
    setMoney(money - props.cout_achat);
  };
  //Incremente les profits par an//
  const incrementAnnualProfit = () => {
    setAnnualProfit(annualProfit + props.profit);
  };
  const deincrementAnnualProfit = () => {
    setAnnualProfit(annualProfit - props.profit);
  };
  //Incremente les Particules//
  const incrementEarth = () => {
    setEarth(earth - props.impact_ecologique);
  };
  const deIncrementEarth = () => {
    setEarth(earth + props.impact_ecologique);
  };
  //Incremente l'Eau//
  const incrementEau = () => {
    setEau(eau + props.consommation_eau);
  };
  //Incremente energie//
  const incrementEnergie = () => {
    setEnergie(energie + props.consommation_energetique);
  };
  //Incremente sol//
  const incrementSol = () => {
    setSol(sol + props.utilisation_sol);
  };

  return (
    <SCard>
      <h1>{props.nom}</h1>
      <div className="profits">
        Profits : <span>{props.profit}</span>€ /ans
      </div>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Consomation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Particules : </td>
            <td className="qte">
              {props.impact_ecologique}
              <span>d./kg de produit</span>
            </td>
          </tr>
          <tr>
            <td>Eau : </td>
            <td className="qte">
              {props.consommation_eau}
              <span> m3/kg de produit</span>
            </td>
          </tr>
          <tr>
            <td>Energie : </td>
            <td className="qte">
              {props.consommation_energetique}
              <span> MJ/kg produit</span>
            </td>
          </tr>
          <tr>
            <td>Sol : </td>
            <td className="qte">
              {props.utilisation_sol}
              <span> Pt/kg de produit</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="center">
        <button
          className="plus"
          onClick={() => {
            deIncrementMoney();
            incrementAnnualProfit();
            deIncrementEarth();
            setNb(nb + 1);
            incrementEau();
            incrementEnergie();
            incrementSol();
          }}
        >
          Acheter pour <br />
          {props.cout_achat} €
        </button>
      </div>
      <h2>{nb}</h2>
      <img src={props.image} alt="img" />
    </SCard>
  );
}
