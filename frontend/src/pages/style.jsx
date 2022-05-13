import styled from "styled-components";

export default styled.section`
  font-weight: Bold;
  text-shadow: 5px 2px 2px #fbb7a2;

  .start {
    background: url("src/assets/home.jpg");
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 94vh;
    div {
      display: flex;
      align-items: center;
    }
  }

  h1 {
    font-size: 80px;
    margin-bottom: 8vh;
  }
  p {
    text-align: center;
    font-size: 32px;
  }
  img {
    height: 80px;
    margin-right: 1em;
  }
  a {
    font-size: 40px;
    text-decoration: none;
    margin-top: 2vh;
  }

  .myButton {
    margin-top: 8vh;
    box-shadow: 3px 4px 0px 0px #070707;
    background: linear-gradient(to bottom, #585ad4 5%, #378de5 100%);
    background-color: #585ad4;

    border: 1px solid #337bc4;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;

    font-size: 50px;

    padding: 2rem 4rem;
    text-decoration: none;
    text-shadow: 0px 1px 0px #585ad4;
  }

  .myButton:active {
    position: relative;
    top: 1px;
  }
  .stop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
