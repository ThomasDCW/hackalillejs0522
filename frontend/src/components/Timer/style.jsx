import styled from "styled-components";

export default styled.div`
  color: #1e212b;
  font-weight: bold;
  text-shadow: 4px 0px 0px #f9f9f9;
  position: fixed;
  bottom: 2vh;
  margin-left: 1vw;

  .timer {
    font-size: 20px;
    img {
      width: 70px;
    }
  }
  @media screen and (max-width: 600px) {
    .timer {
      font-size: 18px;
      margin-bottom: 0.5rem;
    }
  }
`;
