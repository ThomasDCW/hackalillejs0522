import SCounter from "./style";
import { useContext } from "react";
import statsContext from "../../services/contexts/index";

export default function Wallet() {
  const { money, earth, defineImg } = useContext(statsContext);

  return (
    <SCounter>
      <div className="earth">
        {defineImg()}
        {earth}
      </div>
      <div className="money">{money.toFixed(2)}€</div>
    </SCounter>
  );
}
