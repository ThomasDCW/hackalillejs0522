import Header from "@components/Header";
import Card from "@components/Card";
import { Reset } from "styled-reset";

function App() {
  return (
    <div className="App">
      <Reset />
      <Header />
      <main>
        <Card />
      </main>
    </div>
  );
}

export default App;
