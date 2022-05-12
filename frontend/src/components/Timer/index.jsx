import STimer from "./style";
import timerImg from "../../assets/timer.png";
import context from "../../services/contexts/index";
import { useContext } from "react";
export default function Timer() {
  const { timer, timerActif } = useContext(context);
  return (
    <STimer>
      <img src={timerImg} />
      <p className={timerActif ? "showTimer" : "hideTimer"}>{timer}</p>
    </STimer>
  );
}
