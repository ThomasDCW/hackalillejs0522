import styled from "styled-components";

export default styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 8vh;
  .money {
    color: #ffe100;
    font-size: 50px;
    text-shadow: 5px 5px 5px #000000;
    font-weight: bold;
    background: url("src/assets/billet.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  }
  .earth {
    color: #ffffff;
    font-size: 50px;
    text-shadow: 5px 5px 5px #000000;
    font-weight: bold;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    img {
      aspect-ratio: 1/1;
      width: 12rem;
      position: absolute;
      z-index: -1;
    }
  }
  @media screen and (max-width: 600px) {
    .money {
      height: 5vh;
      font-size: 40px;
      margin-top: -6rem;
    }
    .earth {
      width: 6rem;
      font-size: 40px;
      margin-top: 2rem;
      margin: 1rem -5rem 0 0;

      img {
        width: 8rem;
      }
    }
  }
`;
