import Start from "@components/Start";
import { Link } from "react-router-dom";
import SHome from "./style";

export default function Home() {
  return (
    <>
      <SHome>
        <div className="start">
          <h1>Bienvenue chez Big Bill ! </h1>
          <ul>
            <p>Règles du jeu :</p>
            <li>Vous démarrez avec 400 000 €</li>
            <li>
              Vous avez jusqu'à l'année 2100 pour investir et gagner de l'argent
              (une année = 5 secondes)
            </li>
            <li>Maintenez l'indicateur de la planète en dessous de 8000</li>
            <li>Maintenez votre argent au-dessus de 0 €</li>
          </ul>
          <Link to="/game">
            <Start />
          </Link>
        </div>
      </SHome>
    </>
  );
}
