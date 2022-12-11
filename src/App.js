import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";
function App() {
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Banane" },
    { id: 2, nom: "Abricot" },
    { id: 3, nom: "Péche" }
  ]);

  // const inputRef = useRef();

  const handleDelete = (id, nom) => {
    const fruitCopy = [...fruits];
    const copy = fruitCopy.filter((fruit) => fruit.id !== id);
    setFruits(copy);
    alert(`Etes vous sûr de vouloir supprimer le fruit ${nom}`);
  };

  const handleAdd = (fruitAjouter) => {
    const copyFruits = [...fruits];
    copyFruits.push(fruitAjouter);
    setFruits(copyFruits);
  };
  const affichageFruit = (fruitNom) => {
    alert(`J'aime trop ce fruit ${fruitNom}`);
  };

  return (
    <div>
      <h1>Liste de fruits</h1>
      {/* liste de fruits */}
      <ul>
        {fruits.map((data) => (
          <Fruit
            fruitInfo={data}
            actionClick={() => handleDelete(data.id, data.nom)}
            key={data.id}
          />
        ))}
      </ul>
      {/* formulaire d'ajout */}
      <FruitForm handleAdd={handleAdd} />
    </div>
  );
}
export default App;
