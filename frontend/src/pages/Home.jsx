import Start from "@components/Start";
import Stop from "@components/Stop";
import { Link } from "react-router-dom";
import SHome from "./style";

export default function Home() {
  return (
    <>
      <SHome>
        <div className="start">
          <h1>Bienvenue chez Big Bill ! </h1>
          <p>Vous avez 2 minutes pour investir et gagner de l'argent!</p>
          <div>
            <img src="src/assets/warning.png" />
            <p>
              Les ressources ne sont pas inépuisables, un conseil : faites
              attention à l'état de la planète.
            </p>
            <img src="src/assets/warning.png" />
          </div>
          <Link to="/game">
            <Start />
          </Link>
        </div>
      </SHome>
    </>
  );
}
