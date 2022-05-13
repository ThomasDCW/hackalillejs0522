import SCounter from "./style";
import { useContext } from "react";
import statsContext from "../../services/contexts/index";
import imgEarth1 from "../../assets/terre1.png";
import imgEarth2 from "../../assets/terre2.png";
import imgEarth3 from "../../assets/terre3.png";
import imgEarth4 from "../../assets/terre4.png";
import imgEarth5 from "../../assets/terre5.png";

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
