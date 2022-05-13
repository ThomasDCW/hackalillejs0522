import SHistory from "./style";
import { useContext, useEffect, useState, useRef } from "react";
import statsContext from "@services/contexts";

function history() {
  const { timer, annualProfit } = useContext(statsContext);
  const [array, setArray] = useState([]);
  // const test = useEffect(() => {
  //   {
  //     timer;
  //   }
  //   {
  //     annualProfit;
  //   }
  // }, [timer]);

  // setArray(array.push(test));
  return (
    <SHistory>
      <ul>{/* <li>{test}</li> */}</ul>
    </SHistory>
  );
}

export default history;
