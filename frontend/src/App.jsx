import Header from "@components/Header";
import Card from "@components/Card";
import Wallet from "@components/Wallet";
import Avatar from "@components/Avatar";
import Inventory from "@components/Inventory";
import Johndoe from "@components/Johnedoe";

import { Reset } from "styled-reset";

function App() {
  return (
    <div className="App">
      <Reset />
      <Header />
      <main>
        <Card />
        <Johndoe />
        <Wallet />
        <Inventory />
        <Avatar />
      </main>
    </div>
  );
}

export default App;
