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
          className="globe bg"
          value="vide"
          onClick={(e) => {
            setChoice(e.target.value);
          }}
        ></button>
        <button
          className="Champ bg"
          value="Champ"
          onClick={(e) => {
            setChoice(e.target.value);
          }}
        ></button>
        <button
          className="Usine bg"
          value="Usine"
          onClick={(e) => {
            setChoice(e.target.value);
          }}
        ></button>
        <button
          className="Vache bg"
          value="Elevage"
          onClick={(e) => {
            setChoice(e.target.value);
          }}
        ></button>
        <button
          className="Arbre bg"
          value="positif"
          onClick={(e) => {
            setChoice(e.target.value);
          }}
        ></button>
      </div>
      <img src={logo} alt="logo" />
    </SHeader>
  );
}
