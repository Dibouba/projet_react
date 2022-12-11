export default function Fruit(props) {
  //state
  const Info = props.fruitInfo;
  //const onDelete = props.fruitDelete;

  //comportement

  //affichage

  return (
    <div>
      <li>
        {Info.nom}
        <button onClick={props.actionClick}> X </button>
      </li>
    </div>
  );
}
