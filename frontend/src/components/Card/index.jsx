import SCard from "./style";

export default function Card(props) {
  return (
    <SCard>
      <h1>{props.name}</h1>
      <ul>
        <li>{props.profit}</li>
        <li>{props.impact_ecologique}</li>
        <li>{props.categorie}</li>
        <li>{props.cout_achat}</li>
        <li>{props.superficie}</li>
        <li>{props.production}</li>
      </ul>
      <img src={props.image} alt="img" />
    </SCard>
  );
}
