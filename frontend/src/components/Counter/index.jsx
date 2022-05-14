import SCounter from "./style";
import { useContext } from "react";
import statsContext from "../../services/contexts/index";

export default function Wallet() {
  const { money, earth, defineImg } = useContext(statsContext);

  return (
    <SCounter>
      <div className="money">{money}€</div>
      <div className="earth">
        {defineImg()}
        {earth}
      </div>
    </SCounter>
  );
}
