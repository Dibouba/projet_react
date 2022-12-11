import React, { useState } from "react";

export default function FruitForm({ handleAdd }) {
  //state
  const [nouveau, setNouveau] = useState("");

  //comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    // Copie de state

    //Manipuler la copie du state
    const id = new Date().getTime();
    const nom = nouveau;
    const ajouter = { id, nom };

    // modifier le state du nouveau fruit
    handleAdd(ajouter);
    alert(`le fruit ${nom} a été ajouté avec succés`);

    //vider le state
    setNouveau("");
    // console.log(inputRef.current.value);
  };
  // Methode de changement de la valeur de l(input)
  const handleChange = (e) => {
    setNouveau(e.target.value);
  };

  //Affichage
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveau}
          type="text"
          placeholder="Ajouter un nouveau fruit"
          onChange={handleChange}
          // ref={inputRef}
        />
        {/* bouton de soumission */}
        <button>Ajouter</button>
      </form>
    </div>
  );
}
