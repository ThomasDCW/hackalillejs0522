import styled from "styled-components";

export default styled.section`

  color: #272976;
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
    text-decoration: none;
  }
`;
