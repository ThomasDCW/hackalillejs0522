import styled from "styled-components";

export default styled.div`
  display: flex;
  .money {
    color: #ffe100;
    font-size: 64px;
    text-shadow: 5px 5px 5px #000000;
    font-weight: bold;
    background: url("src/assets/billet.png");
    background-repeat: no-repeat;
    background-position: center;
    height: 15vh;
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  }
  .earth {
    color: #ff0000;
    font-size: 64px;
    text-shadow: 5px 5px 5px #000000;
    font-weight: bold;
    background: url("src/assets/terre1.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 15vh;
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  }
`;
