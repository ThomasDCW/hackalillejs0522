import SCard from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";
import { useState } from "react";
import useInterval from "../../services/contexts/useInterval";

export default function CardAchat(props) {
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
    setEau(eau + props.consommation_eau * nb);
    setEnergie(energie + props.consommation_energetique * nb);
    setSol(sol + props.utilisation_sol * nb);
  }, 5000);

  //========  €  =======//
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
  const deIncrementEarth = () => {
    setEarth(earth + props.impact_ecologique);
  };
  //Incremente l'Eau//
  const incrementEau = () => {
    setEau(eau + props.consommation_eau);
  };
  //Incremente energie//
  const incrementEnergie = () => {
    const nrj = energie;
    setEnergie(nrj + props.consommation_energetique);
  };
  //Incremente sol//
  const incrementSol = () => {
    setSol(sol + props.utilisation_sol);
  };

  const incrementInvest = () => {
    // setInvestissement(investissement);
    setInvestissement([...investissement, props.id]);
  };

  return (
    <SCard>
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
            incrementInvest();
          }}
        >
          Acheter pour <br />
          {props.cout_achat} €
        </button>
      </div>
    </SCard>
  );
}
