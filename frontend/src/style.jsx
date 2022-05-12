import styled from "styled-components";

export default styled.section`
  font-family: "Roboto", "Andika New Basic", sans-serif;
  background-color: #fbb7a2;
  height: 100vh;

  .gallery {
    height: 60vh;
    overflow: scroll;
  }
  .stats {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 3vh;
    width: 100vw;
  }
`;
