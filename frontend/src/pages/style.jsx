import styled from "styled-components";

export default styled.section`
  width: 100vw;
  border: 1px solid red;
  text-align: center;
  .start,
  .stop {
    background: url("src/assets/home.jpg");
    background-repeat: no-repeat;
    background-position: fill;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-direction: center;
    align-items: center;
    min-height: 90vh;
    margin: auto;
  }

  .start p,
  h1,
  .stop p,
  .stop h1 {
    width: 50vw;
    font-size: 1.5rem;
    margin-bottom: 0.7rem;
  }
  h1 {
    font-size: 3rem;
    font-weight: 1000;
  }
`;
