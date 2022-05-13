import SHeader from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";
import logo from "../../assets/logoBigBill1.png";

export default function Header() {
  const { choice, setChoice } = useContext(statsContext);
  return (
    <SHeader>
      <div className="catFiltre">
        <button
          value="vide"
          onClick={(e) => {
            setChoice(e.target.value);
          }}
        >
          TOUT
        </button>
        <button
          value="Champ"
          onClick={(e) => {
            setChoice(e.target.value);
          }}
        >
          Champs
        </button>
        <button
          value="Usine"
          onClick={(e) => {
            setChoice(e.target.value);
          }}
        >
          Usines
        </button>
        <button
          value="Elevage"
          onClick={(e) => {
            setChoice(e.target.value);
          }}
        >
          Autres
        </button>
        <button
          value="positif"
          onClick={(e) => {
            setChoice(e.target.value);
          }}
        >
          Ressources
        </button>
      </div>
      <img src={logo} alt="logo" />
    </SHeader>
  );
}
