import SStop from "./style";
import { useContext } from "react";
import StatsContext from "../../services/contexts/index";

export default function Stop() {
  const { reset } = useContext(StatsContext);
  return (
    <SStop>
      <button onClick={reset}>Stop</button>
    </SStop>
  );
}
