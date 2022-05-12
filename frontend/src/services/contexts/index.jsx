import { createContext, useState } from "react";
import PropTypes from "prop-types";

const statsContext = createContext();
export default statsContext;

export function StatsContext({ children }) {
  const [timer, setTimer] = useState(0);
  const [timerActif, setTimerActif] = useState(false);
  const [money, setMoney] = useState(0);
  const [impacctEcolo, setImpactEcolo] = useState(0);

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

StatsContext.propTypes = {
  children: PropTypes.node.isRequired,
};
