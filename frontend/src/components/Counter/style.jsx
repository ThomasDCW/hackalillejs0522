import styled from "styled-components";

export default styled.div`
  position: fixed;
  width: 20vw;
  flex-direction: column;
  margin-left: 60vw;
  .money {
    color: #ffe100;
    font-size: 25px;
    text-shadow: 5px 5px 5px #000000;
    font-weight: bold;
    background: url("src/assets/billet.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 35%;
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  }
  .earth {
    color: #ffffff;
    font-size: 30px;
    text-shadow: 5px 5px 5px #000000;
    font-weight: bold;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    padding-bottom: 3vh;
    height: 6vh;
    img {
      aspect-ratio: 1/1;
      width: 25%;
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
