import SHistory from "./style";
import { useContext, useEffect, useState } from "react";
import statsContext from "@services/contexts";

function history() {
  const { timer, annualProfit } = useContext(statsContext);
  const [array, setArray] = useState([]);
  const [array2, setArray2] = useState("");
  useEffect(() => {
    const arr1 = setArray(array + timer);
    return <li>{arr1}</li>;
  }, [timer]);
  useEffect(() => {
    return setArray2(array2 + annualProfit);
  }, [timer]);
  const affichage = [];
  return (
    <SHistory>
      <p>
        {array} :{array2}€
      </p>
    </SHistory>
  );
}

export default history;
