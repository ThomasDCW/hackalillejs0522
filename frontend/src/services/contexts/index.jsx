import { createContext, useState } from "react";
import useInterval from "./useInterval";
import imgEarth1 from "../../assets/Compte/Vide.png";
import imgEarth2 from "../../assets/Compte/earth-1.png";
import imgEarth3 from "../../assets/Compte/earth-2.png";
import imgEarth4 from "../../assets/Compte/earth-3.png";
import imgEarth5 from "../../assets/Compte/earth-4.png";
import imgEarth6 from "../../assets/Compte/earth-5.png";
import imgEarth7 from "../../assets/Compte/earth-6.png";
import imgEarth8 from "../../assets/Compte/earth-7.png";
import imgEarth9 from "../../assets/Compte/earth-8.png";
import imgEarth10 from "../../assets/Compte/earth-9.png";
import imgEarth11 from "../../assets/Compte/earth-10.png";

const statsContext = createContext();
export default statsContext;

export function StatsContext({ children }) {
  const [timer, setTimer] = useState(2022);
  const [money, setMoney] = useState(400000);
  const [earth, setEarth] = useState(0);
  const [eau, setEau] = useState(0);
  const [energie, setEnergie] = useState(0);
  const [sol, setSol] = useState(0);
  const [impacctEcolo, setImpactEcolo] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [annualProfit, setAnnualProfit] = useState(0);
  const [modal, setModal] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [investissement, setInvestissement] = useState([]);

  useInterval(() => {
    if (timerActive) setTimer((prevState) => prevState + 1);
  }, 5000);

  const reset = () => {
    setTimerActive(false);
    setTimer(0);
  };

  const defineImgEarth = () => {
    if (earth < 1000) {
      return <img src={imgEarth1} />;
    } else if (earth > 1000 && earth < 1999) {
      return <img src={imgEarth2} />;
    } else if (earth > 2000 && earth < 2999) {
      return <img src={imgEarth3} />;
    } else if (earth > 3000 && earth < 3999) {
      return <img src={imgEarth4} />;
    } else if (earth > 4000 && earth < 4999) {
      return <img src={imgEarth5} />;
    } else if (earth > 5000 && earth < 5999) {
      return <img src={imgEarth6} />;
    } else if (earth > 6000 && earth < 6999) {
      return <img src={imgEarth7} />;
    } else if (earth > 7000 && earth < 7999) {
      return <img src={imgEarth8} />;
    } else if (earth > 8000 && earth < 8999) {
      return <img src={imgEarth9} />;
    } else if (earth > 9000 && earth < 9999) {
      return <img src={imgEarth10} />;
    } else if (earth > 10000 && earth < 10999) {
      return <img src={imgEarth11} />;
    }
  };

  const endGameFunc = () => {
    if (earth >= 5000 || timer >= 2060 || money <= 0) {
      setEndGame(true);
      reset();
      setModal(true);
    }
  };

  return (
    <statsContext.Provider
      value={{
        timer,
        setTimer,
        timerActive,
        setTimerActive,
        money,
        setMoney,
        impacctEcolo,
        setImpactEcolo,
        reset,
        annualProfit,
        setAnnualProfit,
        earth,
        setEarth,
        defineImgEarth,
        endGameFunc,
        modal,
        setModal,
        eau,
        setEau,
        energie,
        setEnergie,
        sol,
        setSol,
        investissement,
        setInvestissement,
      }}
    >
      {children}
    </statsContext.Provider>
  );
}
