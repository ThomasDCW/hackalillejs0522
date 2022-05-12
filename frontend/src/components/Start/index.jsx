import SStart from "./style";
import { useContext } from "react";
import StatsContext from "../../services/contexts/index";

export default function Start() {
  const { timerActive, setTimerActive } = useContext(StatsContext);
  return (
    <SStart>
      <button
        className={timerActive ? "hide" : "show"}
        onClick={() => {
          setTimerActive(true);
        }}
      >
        Start
      </button>
    </SStart>
  );
}
