import SStart from "./style";
import { useContext } from "react";
import StatsContext from "../../services/contexts/index";

export default function Start() {
  const {
    timerActive,
    setTimerActive,
    setMoney,
    setTimer,
    setEarth,
    setAnnualProfit,
  } = useContext(StatsContext);
  return (
    <SStart>
      <button
        onClick={() => {
          setTimerActive(true);
          setTimer(2022);
          setMoney(400000);
          setEarth(0);
          setAnnualProfit(0);
        }}
      >
        START
      </button>
    </SStart>
  );
}
