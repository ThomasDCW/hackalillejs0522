import avocat from "@assets/avocat.png";
import mais from "@assets/mais.png";
import volaille from "@assets/volaille.png";
import boeuf from "@assets/boeuf.png";
import fraise from "@assets/fraise.png";
import porc from "@assets/porc.png";
import sushi from "@assets/sushi.png";
import foret from "@assets/foret.png";
import moulin from "@assets/moulin.png";
import usine from "@assets/usine.png";
import cafe from "@assets/cafe.png";
import platCuisiné from "@assets/platCuisiné.png";

/*toute les unitées sont à la tonne */
const datas = [
  {
    nom: "Champ d'avocat",
    profit: 17000,
    impact_ecologique: 55,
    image: avocat,
    categorie: "Champ",
    cout_achat: 10000,
    superficie: "1hectar",
    production: 10,
  },
  {
    nom: "Champs de maïs",
    profit: 350,
    impact_ecologique: 24,
    image: mais,
    categorie: "Champ",
    cout_achat: 10000,
    superficie: "1hectar",
    production: 1000,
  },
  {
    nom: "Ferme de volaille",
    profit: 1800,
    impact_ecologique: 83,
    image: volaille,
    categorie: "Elevage",
    cout_achat: 10000,
    superficie: "1hectar",
    production: 80,
  },
  {
    nom: "Ferme de boeuf",
    profit: 6500,
    impact_ecologique: 346,
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
    impact_ecologique: 42,
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
    impact_ecologique: 146,
    image: porc,
    categorie: "Elevage",
    cout_achat: 10000,
    superficie: "1hectar",
    production: 9,
  },
  {
    nom: "Sushi",
    profit: 3400,
    impact_ecologique: 242,
    image: sushi,
    categorie: "Elevage",
    cout_achat: 10000,
    superficie: "1hectar",
    production: 8,
  },
  {
    nom: "Forêt",
    profit: 0,
    impact_ecologique: -400,
    image: foret,
    categorie: "positif",
    cout_achat: 10000,
    superficie: "1hectar",
    production: 0,
  },
  {
    nom: "moulin",
    profit: 0,
    impact_ecologique: -100,
    image: moulin,
    categorie: "positif",
    cout_achat: 10000,
    superficie: "1hectar",
    production: 0,
  },
  {
    nom: "usine de Pastis",
    profit: 6000,
    impact_ecologique: 12,
    image: usine,
    categorie: "usine",
    cout_achat: 10000,
    superficie: "1hectar",
    production: 1000,
  },
  {
    nom: "champ de café",
    profit: 6000,
    impact_ecologique: 51,
    image: cafe,
    categorie: "champ",
    cout_achat: 10000,
    superficie: "1hectar",
    production: 1000,
  },
  {
    nom: "Plat cuisiné",
    profit: 6000,
    impact_ecologique: 35,
    image: platCuisiné,
    categorie: "usine",
    cout_achat: 10000,
    superficie: "1hectar",
    production: 1000,
  },
];
export default datas;
