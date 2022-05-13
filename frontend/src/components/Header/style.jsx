import styled from "styled-components";
import globe from "../../assets/globe.png";
import champ from "@assets/champ.png";
import usine from "@assets/usinepicto.png";
import vache from "@assets/vache.png";
import arbre from "@assets/arbre.png";

export default styled.header`
  text-align: center;
  height: 6vh;
  background-color: #585ad4;
  img {
    height: 100%;
    margin-top: -6rem;
  }
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
    height: 5vh;
    width: 30vw;
    margin-left: 2rem;
    display: flex;
    justify-content: center;
    button {
      aspect-ratio: 1/1;
      height: 3.5rem;
      border-radius: 50%;
      //margin-top: 1rem;
      img {
        //margin-top: -0.05rem;
        //margin-left: -0.25rem;
      }
    }
  }
`;
