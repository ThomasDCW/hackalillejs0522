import SCounter from "./style";
import { useContext } from "react";
import statsContext from "../../services/contexts/index";

export default function Wallet() {
  const { money, earth, defineImgEarth, eau, energie, sol } =
    useContext(statsContext);

  return (
    <SCounter>
      <div className="money">{money}€</div>
      <div className="earth">
        {defineImgEarth()}
        {earth}
      </div>
      <div className="eau">Consomation eau: {eau}</div>
      <div className="energie">Consomation energie: {energie}</div>
      <div className="sol">Utilisation du sol: {sol}</div>
    </SCounter>
  );
}
