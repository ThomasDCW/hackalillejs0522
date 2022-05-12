import SFooter from "./style";
import logo from "../../assets/logoBigBill.png";

export default function Header() {
  return (
    <SFooter>
      <img src={logo} alt="logo" />
    </SFooter>
  );
}
