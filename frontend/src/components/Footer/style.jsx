import logo from "../../assets/logoBigBill1.png";
import styled from "styled-components";

export default styled.header`
  background-color: #585ad4;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 2vh;
`;
