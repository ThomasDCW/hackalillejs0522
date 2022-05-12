import SStart from "./style";
import { useContext } from "react";
import StatsContext from "../../services/contexts/index";

export default function Start() {
  const { setTimerActive } = useContext(StatsContext);
  return (
    <SStart>
      <button
        onClick={() => {
          setTimerActive(true);
        }}
      >
        Start
      </button>
    </SStart>
  );
}
