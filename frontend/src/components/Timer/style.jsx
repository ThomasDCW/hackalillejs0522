import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: space-around;
  color: #585ad4;
  font-size: 32px;
  font-weight: bold;
  text-shadow: 4px 0px 0px #000000;
  position: fixed;
  bottom: 2vh;
  width: 50vw;

  .timer {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 40px;
    img {
      width: 90px;
    }
  }
`;
