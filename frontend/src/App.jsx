import Header from "@components/Header";
import Gallery from "@components/Gallery";
import Counter from "@components/Counter";
import Avatar from "@components/Avatar";
import Timer from "@components/Timer";
import GlobalStyle from "./style";
import Footer from "@components/Footer";
import Start from "@components/Start";
import Stop from "@components/Stop";
import Modal from "@components/Modal";
import { Reset } from "styled-reset";
import { StatsContext } from "./services/contexts/index";

function App() {
  return (
    <div className="App">
      <StatsContext>
        <Reset />
        <GlobalStyle>
          <Header />
          <main>
            <section className="gallery">
              <Gallery />
            </section>
            <section className="stats">
              <div>
                <Counter />
                <Timer />
              </div>
              <Start />
              <Stop />
              <Avatar />
              <Modal />
            </section>
          </main>
          <Footer />
        </GlobalStyle>
      </StatsContext>
    </div>
  );
}

export default App;
