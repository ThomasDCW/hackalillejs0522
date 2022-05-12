import avocat from "@assets/avocat.png";
import mais from "@assets/mais.png";
import volaille from "@assets/volaille.png";
import boeuf from "@assets/boeuf.png";
import fraise from "@assets/fraise.png";
import porc from "@assets/porc.png";

/*toute les unitées sont à la tonne */
const datas = [
  {
    nom: "Champ d'avocat",
    profit: 17000,
    impact_ecologique: "0,55",
    image: avocat,
    categorie: "Champ",
    cout_achat: 10000,
    superficie: "1hectar",
    production: 10,
  },
  {
    nom: "Champs de maïs",
    profit: 350,
    impact_ecologique: "0,24",
    image: mais,
    categorie: "Champ",
    cout_achat: 10000,
    superficie: "1hectar",
    production: 1000,
  },
  {
    nom: "Ferme de volaille",
    profit: 1800,
    impact_ecologique: "0,83",
    image: volaille,
    categorie: "Elevage",
    cout_achat: 10000,
    superficie: "1hectar",
    production: 80,
  },
  {
    nom: "Ferme de boeuf",
    profit: 6500,
    impact_ecologique: "0,346",
    image: boeuf,
    categorie: "Elevage",
    cout_achat: 10000,
    superficie: "1hectar",
    production: 0.6,
  },
  ,
  {
    nom: "Champ de fraise",
    profit: 6000,
    impact_ecologique: "0,42",
    image: fraise,
    categorie: "champ",
    cout_achat: 10000,
    superficie: "1hectar",
    production: 34,
  },
  ,
  {
    nom: "Ferme de porc",
    profit: 1900,
    impact_ecologique: "0,146",
    image: porc,
    categorie: "Elevage",
    cout_achat: 10000,
    superficie: "1hectar",
    production: 9,
  },
];
export default datas;
