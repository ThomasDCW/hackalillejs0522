import Header from "@components/Header";
import Card from "@components/Card";
import Wallet from "@components/Wallet";
import Avatar from "@components/Avatar";
import { Reset } from "styled-reset";

function App() {
  return (
    <div className="App">
      <Reset />
      <Header />
      <main>
        <Card />
        <Wallet />
        <Avatar />
      </main>
    </div>
  );
}

export default App;
