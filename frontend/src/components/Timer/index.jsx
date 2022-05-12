import STimer from "./style";
import timerImg from "../../assets/timer.png";
import context from "../../services/contexts/index";
import { useContext } from "react";

export default function Timer() {
  const { timer, timerActif, profit } = useContext(context);

  return (
    <STimer>
      <img src={timerImg} />
      <p className={timerActif ? "showTimer" : "hideTimer"}>
        Année en cours : {timer}
      </p>
      <div className="gain">Gain par an:{profit}</div>
    </STimer>
  );
}
