import { createContext, useState } from "react";
import useInterval from "./useInterval";

const statsContext = createContext();
export default statsContext;

export function StatsContext({ children }) {
  const [timer, setTimer] = useState(2022);
  const [timerActif, setTimerActif] = useState(true);
  const [money, setMoney] = useState(0);
  const [impacctEcolo, setImpactEcolo] = useState(0);

  useInterval(() => {
    if (timerActif) setTimer((prevState) => prevState + 1);
  }, 5000);

  return (
    <statsContext.Provider
      value={{
        timer,
        setTimer,
        timerActif,
        setTimerActif,
        money,
        setMoney,
        impacctEcolo,
        setImpactEcolo,
      }}
    >
      {children}
    </statsContext.Provider>
  );
}
