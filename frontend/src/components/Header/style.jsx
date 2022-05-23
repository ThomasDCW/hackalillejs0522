import styled from "styled-components";
import globe from "../../assets/globe.png";
import champ from "@assets/champ.png";
import usine from "@assets/usinepicto.png";
import vache from "@assets/vache.png";
import arbre from "@assets/arbre.png";

export default styled.header`
  height: 6vh;
  background-color: #585ad4;
  display: flex;
  .bg {
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .globe {
    background-image: url(${globe});
  }
  .Champ {
    background-image: url(${champ});
  }
  .Usine {
    background-image: url(${usine});
  }
  .Vache {
    background-image: url(${vache});
  }
  .Arbre {
    background-image: url(${arbre});
  }

  .catFiltre {
    height: 100%;
    width: 45vw;
    margin-left: 2rem;
    button {
      aspect-ratio: 1/1;
      height: 100%;
      border-radius: 50%;
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
