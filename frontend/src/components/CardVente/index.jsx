import SCard from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";
import { useState } from "react";
import useInterval from "../../services/contexts/useInterval";

export default function CardVente(props) {
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
    investissement,
    setInvestissement,
  } = useContext(statsContext);

  //========  actualisation chaque année  ========//
  useInterval(() => {
    if (timerActive) setMoney(money + props.profit);
  }, 5000);

  useInterval(() => {
    if (annualProfit > 1) {
      return annualProfit;
    }
    if (timerActive) setAnnualProfit(props.profit);
  }, 5000);

  //========  €  =======//
  const deIncrementMoney = () => {
    setMoney(money + props.cout_achat);
  };
  //Incremente les profits par an//
  const deIncrementAnnualProfit = () => {
    setAnnualProfit(annualProfit - props.profit);
  };

  const deIncrementInvest = () => {
    // setInvestissement(investissement);
    setInvestissement([...investissement, props.id]);
  };

  return (
    <SCard>
      <div className="center">
        <button
          className="moins"
          onClick={() => {
            deIncrementMoney();
            deIncrementAnnualProfit();
            deIncrementEarth();
            setNb(nb + 1);
            deIncrementEau();
            deIncrementEnergie();
            deIncrementSol();
            deIncrementInvest();
          }}
        >
          Vendre pour <br />
          {props.cout_achat} €
        </button>
      </div>
    </SCard>
  );
}
