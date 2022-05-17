import styled from "styled-components";
import globe from "../../assets/globe.png";
import champ from "@assets/champ.png";
import usine from "@assets/usinepicto.png";
import vache from "@assets/vache.png";
import arbre from "@assets/arbre.png";

export default styled.header`
  height: 7vh;
  background-color: #585ad4;
  display: flex;
  img {
    margin-left: 2rem;
    width: 65%;
  }
  .displayButton {
    width: 80vw;
    display: flex;
    justify-content: space-around;
    button {
      width: 20vw;
    }
  }

  @media screen and (max-width: 600px) {
    .catFiltre {
      display: none;
    }
    img {
      margin-top: 0.1rem;
    }
  }
`;
