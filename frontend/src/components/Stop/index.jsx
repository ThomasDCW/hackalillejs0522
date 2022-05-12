import SStop from "./style";
import { useContext } from "react";
import StatsContext from "../../services/contexts/index";

export default function Stop() {
  const { reset, timerActive } = useContext(StatsContext);
  return (
    <SStop>
      <button className={timerActive ? "show" : "hideS"} onClick={reset}>
        Stop
      </button>
    </SStop>
  );
}
