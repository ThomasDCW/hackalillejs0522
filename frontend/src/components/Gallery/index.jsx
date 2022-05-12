import SGallery from "./style";
import Card from "@components/Card";
import datas from "@assets/data";

export default function Gallery() {
  return (
    <SGallery>
      {datas.map((data) => {
        return (
          <Card
            key={data.nom}
            nom={data.nom}
            profit={data.profit}
            impact_ecologique={data.impact_ecologique}
            categorie={data.categorie}
            cout_achat={data.cout_achat}
            superficie={data.superficie}
            production={data.production}
            image={data.image}
            realeState={data.realeState}
          />
        );
      })}
    </SGallery>
  );
}
