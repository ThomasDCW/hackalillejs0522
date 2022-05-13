import Header from "@components/Header";
import GlobalStyle from "./style";
import Footer from "@components/Footer";
import Home from "@pages/Home";
import Game from "@pages/Game";
import { Reset } from "styled-reset";
import { StatsContext } from "./services/contexts/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <StatsContext>
        <Reset />
        <GlobalStyle>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes>
          <Footer />
        </GlobalStyle>
      </StatsContext>
    </div>
  );
}

export default App;
