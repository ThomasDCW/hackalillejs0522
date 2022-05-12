import Header from "@components/Header";
import Gallery from "@components/Gallery";
import Counter from "@components/Counter";
import Avatar from "@components/Avatar";
import Inventory from "@components/Inventory";
import Timer from "@components/Timer";
import GlobalStyle from "./style";
import { Reset } from "styled-reset";

function App() {
  return (
    <div className="App">
      <Reset />
      <GlobalStyle>
        <Header />
        <main>
          <section className="">
            <Gallery />
            <Timer />
            <Counter />
          </section>
          <section className="sideContainer">
            <Inventory />
            <Avatar />
          </section>
        </main>
      </GlobalStyle>
    </div>
  );
}

export default App;
