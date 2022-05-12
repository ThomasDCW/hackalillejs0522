import Header from "@components/Header";
import Gallery from "@components/Gallery";
import Wallet from "@components/Wallet";
import Avatar from "@components/Avatar";
import Inventory from "@components/Inventory";
import Johndoe from "@components/Johnedoe";
import GlobalStyle from "./style";

import { Reset } from "styled-reset";

function App() {
  return (
    <div className="App">
      <Reset />
      <GlobalStyle>
        <Header />
        <main>
          <Gallery />
          <Johndoe />
          <Wallet />
          <Inventory />
          <Avatar />
        </main>
      </GlobalStyle>
    </div>
  );
}

export default App;
