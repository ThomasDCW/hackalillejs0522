import STimer from "./style";
import StatsContext from "../../services/contexts/index";
import { useContext } from "react";

export default function Timer() {
  const { timer, timerActive, annualProfit } = useContext(StatsContext);
  return (
    <STimer>
      <div className="timer">
        <img src="src/assets/timer.png" />

        <p>Année : {timer}</p>
        <p>Bénéfices par an : {annualProfit}€</p>
      </div>
    </STimer>
  );
}
