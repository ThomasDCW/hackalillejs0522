import STimer from "./style";
import timerImg from "../../assets/timer.png";
import StatsContext from "../../services/contexts/index";
import { useContext } from "react";
export default function Timer() {
  const { timer, timerActive } = useContext(StatsContext);
  return (
    <STimer>
      <img src={timerImg} />
      <p className={timerActive ? "showTimer" : "hideTimer"}>
        Année en cours : {timer}
      </p>
    </STimer>
  );
}
