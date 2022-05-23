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
import ble from "@assets/ble.png";
import nouille from "@assets/nouille.png";
import glace from "@assets/glace.png";
import ail from "@assets/ail.jpg";
import moules from "@assets/moule.jpg";
import liqueur from "@assets/liqueur.jpg";

/*toute les unitées sont à la tonne */
const datas = [
  {
    nom: "Champ d'avocat",
    profit: 17000,
    impact_ecologique: 275,
    image: avocat,
    categorie: "Champ",
    cout_achat: 213160,
    superficie: "1hectar",
    production: 10,
  },
  {
    nom: "Champs de maïs",
    profit: 350,
    impact_ecologique: 124,
    image: mais,
    categorie: "Champ",
    cout_achat: 76673,
    superficie: "1hectar",
    production: 100,
  },
  {
    nom: "Ferme de volaille",
    profit: 3800,
    impact_ecologique: 731,
    image: volaille,
    categorie: "Elevage",
    cout_achat: 41218,
    superficie: "1hectar",
    production: 80,
  },
  {
    nom: "Ferme de boeuf",
    profit: 6500,
    impact_ecologique: 1323,
    image: boeuf,
    categorie: "Elevage",
    cout_achat: 19343,
    superficie: "1hectar",
    production: 0.6,
  },
  ,
  {
    nom: "Champ de fraise",
    profit: 600,
    impact_ecologique: 53,
    image: fraise,
    categorie: "Champ",

    cout_achat: 28290,

    superficie: "1hectar",
    production: 34,
  },
  ,
  {
    nom: "Ferme de porc",
    profit: 1900,
    impact_ecologique: 95,
    image: porc,
    categorie: "Elevage",
    cout_achat: 59648,
    superficie: "1hectar",
    production: 9,
  },
  {
    nom: "Usine de sushi",
    profit: 3400,
    impact_ecologique: 263,
    image: sushi,
    categorie: "Elevage",
    cout_achat: 61860,
    superficie: "1hectar",
    production: 8,
  },
  {
    nom: "Forêt",
    profit: 0,
    impact_ecologique: -400,
    image: foret,
    categorie: "positif",
    cout_achat: 100000,
    superficie: "1hectar",
    production: 0,
  },
  {
    nom: "Moulin",
    profit: 0,
    impact_ecologique: -100,
    image: moulin,
    categorie: "positif",
    cout_achat: 40000,
    superficie: "1hectar",
    production: 0,
  },
  {
    nom: "Usine de Pastis",
    profit: 8600,
    impact_ecologique: 116,
    image: usine,
    categorie: "Usine",

    cout_achat: 213200,

    superficie: "1hectar",
    production: 10,
  },
  {
    nom: "Champ de café",
    profit: 600,
    impact_ecologique: 94,
    image: cafe,
    categorie: "Champ",

    cout_achat: 73690,

    superficie: "1hectar",
    production: 7,
  },
  {
    nom: "Usine de Plat cuisiné",
    profit: 1500,
    impact_ecologique: 3273,
    image: platCuisiné,
    categorie: "Usine",

    cout_achat: 220000,
    superficie: "1hectar",
    production: 100,
  },
  {
    nom: "Champ de blé",
    profit: 8500,
    impact_ecologique: 87,
    image: ble,
    categorie: "Champ",
    cout_achat: 105720,

    superficie: "1hectar",
    production: 640,
  },
  {
    nom: "Usine de nouilles asiatiques",
    profit: 2000,
    impact_ecologique: 117,
    image: nouille,
    categorie: "Usine",
    cout_achat: 87840,
    superficie: "1hectar",
    production: 1268,
  },
  {
    nom: "Usine de glace à l'eau",
    profit: 5700,
    impact_ecologique: 237,
    image: glace,
    categorie: "Usine",
    cout_achat: 93550,
    superficie: "1hectar",
    production: 13,
  },
  {
    nom: "Ferme à Moules",
    profit: 6300,
    impact_ecologique: 524,
    image: moules,
    categorie: "Elevage",
    cout_achat: 124500,
    superficie: "1hectar",
    production: 19,
  },
  {
    nom: "Champ d'ail",
    profit: 800,
    impact_ecologique: 37,
    image: ail,
    categorie: "Champ",
    cout_achat: 18740,
    superficie: "1hectar",
    production: 9,
  },

  {
    nom: "Usine de liqueur",
    profit: 7800,
    impact_ecologique: 25,
    image: liqueur,
    categorie: "Usine",
    cout_achat: 246800,
    superficie: "1hectar",
    production: 9,
  },
];
export default datas;
