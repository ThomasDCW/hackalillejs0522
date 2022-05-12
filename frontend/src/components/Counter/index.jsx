import SCounter from "./style";
import { useContext } from "react";
import statsContext from "../../services/contexts/index";

export default function Wallet() {
  const { money } = useContext(statsContext);

  return (
    <SCounter>
      <div className="money">{money}€</div>
      <div className="earth">0</div>
    </SCounter>
  );
}
