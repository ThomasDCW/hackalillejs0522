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
          <p>Vous avez 2 minutes pour investir et gagner plus d'argent!</p>
          <p>
            Mais attention, les ressources de la terre ne sont pas inépuisables
            : faites attention à l'état de la terre.
          </p>
          <Link to="/game">
            <Start />
          </Link>
        </div>
      </SHome>
    </>
  );
}
