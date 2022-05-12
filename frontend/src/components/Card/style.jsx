import styled from "styled-components";

export default styled.div`
  color: #3d3b55;
  height: 26rem;
  width: 16rem;
  background-color: white;
  box-sizing: border-box;
  border: 10px solid #585ad4;
  box-shadow: 19px 16px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 2vh;
  li {
    font-size: 20px;
    text-align: center;
    text-shadow: 2px 2px 2px #fbb7a2;
  }
  .moin {
    box-shadow: inset 0px 1px 0px 0px #a30000;
    background: linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
    background-color: #d0451b;
    border-radius: 3px;
    border: 1px solid #942911;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 24px;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #854629;
    width: 50%;
  }
  .plus {
    background: linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
    background-color: #77b55a;
    border-radius: 4px;
    border: 1px solid #4b8f29;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 24px;
    font-weight: bold;
    padding: 6px 12px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #5b8a3c;
    width: 50%;
  }

  img {
    height: 180px;
  }
  h1 {
    text-shadow: 2px 2px 2px #fbb7a2;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  h2 {
    text-shadow: 2px 2px 2px #fbb7a2;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
`;
