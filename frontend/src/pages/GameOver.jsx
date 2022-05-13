import SGameOver from "./style";
import gameover from "../assets/gameover.png";

export default function GameOver() {
  return (
    <>
      <SGameOver>
        <div className="stop">
          <h1>
            <img src={gameover} />
          </h1>
          <p>Il est déjà trop tard</p>
          <p>
            Selon le dernier rapport du Groupe d'Experts Intergouvernemental sur
            l'Evolution du Climat, en 2100, la température sur terre aura
            augmenté de 4°C par rapport à 2050 et la mer aura monté d'1 mètre.
          </p>
        </div>
      </SGameOver>
    </>
  );
}
