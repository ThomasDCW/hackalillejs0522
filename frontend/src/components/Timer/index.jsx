import STimer from "./style";
import timerImg from "../../assets/timer.png";
import History from "@components/History";
import StatsContext from "../../services/contexts/index";
import { useContext } from "react";

export default function Timer() {
  const { timer, timerActive, annualProfit } = useContext(StatsContext);
  return (
    <STimer>
      <img src={timerImg} />
      <p className={timerActive ? "showTimer" : "hideTimer"}>
        Année en cours : {timer}
      </p>
      <div className="gain">Gain par an:{annualProfit}</div>
      <div className="history">
        <History />
      </div>
    </STimer>
  );
}
