import styled from "styled-components";

export default styled.section`
  font-weight: Bold;
  text-shadow: 5px 2px 2px #fbb7a2;
  //HOMEPAGE
  .start {
    color: #1e212b;
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
    font-size: 50px;
    margin-bottom: 8vh;
  }
  ul {
    list-style: square;
    li {
      font-size: 18px;
      margin: 0.5em;
    }
  }
  p {
    text-align: center;
    font-size: 25px;
    margin-bottom: 4vh;
  }
  //HOMEPAGE
  img {
    height: 30px;
    margin-left: 2em;
  }
  a {
    color: #1e212b;
    font-size: 20px;
    text-decoration: none;
    margin-top: 2vh;
  }

  .myButton {
    box-shadow: 3px 4px 0px 0px #070707;
    background: linear-gradient(to bottom, #003cff 5%, #067aed 100%);
    background-color: #1e212b;
    border: 1px solid #1e212b;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-size: 30px;
    padding: 1rem 3rem;
    text-decoration: none;
    text-shadow: 0px 1px 0px #000000;
  }

  .myButton:active {
    position: relative;
    top: 1px;
  }
  .stop {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    h1 {
      text-align: center;
    }
  }
`;
