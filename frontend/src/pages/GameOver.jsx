import SGameOver from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import statsContext from "../services/contexts/index";

export default function GameOver() {
  const { setTimer, setMoney } = useContext(statsContext);
  return (
    <>
      <SGameOver>
        <ul className="stop">
          <li>
            <a href="https://climate.selectra.com/fr/actualites/rapport-giec-2022">
              Rapport du GIEC
            </a>
          </li>
          <li>
            <a href="https://agribalyse.ademe.fr/">Agribalyse</a>
          </li>
          <Link to="/">
            <button className="myButton">ACCUEIL</button>
          </Link>
        </ul>
      </SGameOver>
    </>
  );
}
