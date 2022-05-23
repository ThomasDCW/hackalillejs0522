import Gallery from "@components/Gallery";
import Counter from "@components/Counter";
import Avatar from "@components/Avatar";
import Timer from "@components/Timer";
import Start from "@components/Start";
import Modal from "@components/Modal";
import { useContext } from "react";
import { useEffect } from "react";
import StatsContext from "../services/contexts/index";

export default function Game() {
  const { timer, money, endGameFunc, earth } = useContext(StatsContext);
  useEffect(() => {
    endGameFunc();
  }, [timer, money, earth]);

  return (
    <main>
      <Modal />
      <section className="gallery">
        <Gallery />
      </section>
      <section className="stats">
        <Counter />
        <Timer />
        <Avatar />
      </section>
    </main>
  );
}
