// Importation Package, icon, style, etc...
import React, { useState } from "react";
import "../sass/components/Collapse.scss";

// Composant Collaspe, en cliquant sur la flèche, elle change et affiche le texte du dessus.

// Composant Collapse qui s'appuie sur les props "title" et "content" pour afficher son contenu
// Title qui est le titre & content le contenue qui se trouve dans >data>about.json
const Collapse = ({ title, content }) => {
  // Icon flèche
  const ArrowDown = <i className="fa-solid fa-chevron-down"></i>;
  const ArrowUp = <i className="fa-solid fa-chevron-up"></i>;

  // Utilisation Hook useState qui permet de gérer l'affichage du contenu des collapses
  // Déclare une nouvelle variable d'état, que l'on va appeler « text »
  // L'arguement qu'on passe au Hook useState est false car notre Collapse est fermé et true il est ouvert
  // L'argument false est l'état Actuel & setText est la fonction pour le modifier
  const [text, setText] = useState(false);

  // Fonction Display qui permet de modifier la valeur soit true ou false
  const display = () => {
    setText(!text);
  };

  // JSX
  return (
    <div className="container">
      <div className="title" onClick={display}>
        <h3>{title}</h3>
        {/* Utilisation de L'opérateur conditionnel dans la div pour afficher l'icône qui correspond à la situation */}
        {/* condition ? exprSiVrai : exprSiFaux */}
        {/* L'événement onClick appelle la fonction display qui actualise la valeur de text à true ou false */}
        <div className="collapse_icon">{text ? ArrowUp : ArrowDown}</div>
      </div>
      <div>
        {text && (
          <div className="content animated">
            <p>{content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
