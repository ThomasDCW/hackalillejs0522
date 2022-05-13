import Gallery from "@components/Gallery";
import Counter from "@components/Counter";
import Avatar from "@components/Avatar";
import Timer from "@components/Timer";

export default function Game() {
  return (
    <main>
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
