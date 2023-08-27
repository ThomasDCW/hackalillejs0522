import { createContext, useState } from "react";
import useInterval from "./useInterval";
import imgEarth1 from "../../assets/terre1.png";
import imgEarth2 from "../../assets/terre2.png";
import imgEarth3 from "../../assets/terre3.png";
import imgEarth4 from "../../assets/terre4.png";
import imgEarth5 from "../../assets/terre5.png";

const statsContext = createContext();
export default statsContext;

export function StatsContext({ children }) {
  const [timer, setTimer] = useState(2022);
  const [money, setMoney] = useState(400000);
  const [earth, setEarth] = useState(0);
  const [impacctEcolo, setImpactEcolo] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  const [annualProfit, setAnnualProfit] = useState(0);
  const [choice, setChoice] = useState("vide");
  const [modal, setModal] = useState(false);
  const [endGame, setEndGame] = useState(false);
  useInterval(() => {
    if (timerActive) setTimer((prevState) => prevState + 1);
  }, 5000);

  const reset = () => {
    setTimerActive(false);
  };

  const defineImg = () => {
    if (earth < 1000) {
      return <img src={imgEarth1} />;
    } else if (earth > 1000 && earth < 1999) {
      return <img src={imgEarth2} />;
    } else if (earth > 2000 && earth < 2999) {
      return <img src={imgEarth3} />;
    } else if (earth > 3000 && earth < 3999) {
      return <img src={imgEarth4} />;
    } else if (earth > 4000 && earth < 10000) {
      return <img src={imgEarth5} />;
    }
  };

  const endGameFunc = () => {
    if (earth >= 8000 || timer >= 2100 || money <= 0) {
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
        defineImg,
        choice,
        setChoice,
        endGameFunc,
        modal,
        setModal,
      }}
    >
      {children}
    </statsContext.Provider>
  );
}
