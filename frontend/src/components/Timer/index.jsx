import STimer from "./style";
import timerImg from "../../assets/timer.png";
// import context from "../../../context/Ctx";

export default function Wallet() {
  const timerActif = true; // à remplacer par donnée du contexte
  return (
    <STimer>
      <img src={timerImg} />
      <p className={timerActif ? "showTimer" : "hideTimer"}>00:05</p>
    </STimer>
  );
}
