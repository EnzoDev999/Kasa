import React, { useState } from "react"; // Importe la bibliothèque React et la fonction useState pour gérer l'état local du composant
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importe la bibliothèque FontAwesome pour utiliser des icônes
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"; // Importe des icônes de flèches de FontAwesome
import "../sass/components/Collapse.scss"; // Importe le fichier de styles CSS pour le composant

const Collapse = ({ title, content }) => {
  // Déclare le composant Collapse qui prend deux propriétés : 'title' et 'content'

  const ArrowDown = <FontAwesomeIcon icon={faChevronDown} />; // Crée un élément <FontAwesomeIcon> pour afficher l'icône de flèche vers le bas
  const ArrowUp = <FontAwesomeIcon icon={faChevronUp} />; // Crée un élément <FontAwesomeIcon> pour afficher l'icône de flèche vers le haut

  const [text, setText] = useState(false); // Initialise l'état local 'text' à false, qui représente l'état d'affichage du contenu de la section (setText qui est la fonction de modification)

  const display = () => {
    // Définit la fonction pour afficher ou masquer le contenu de la section
    setText(!text); // Met à jour l'état local 'text' pour basculer entre les états true (afficher le contenu) et false (masquer le contenu)
  };

  return (
    <div className="container">
      {/* Crée un conteneur pour le composant Collapse */}
      <div className="title" onClick={display}>
        {/* Crée une section qui affiche le titre et l'icône de flèche, et qui permet de déclencher l'affichage ou la masquage du contenu */}
        <h3>{title}</h3> {/* Affiche le titre de la section */}
        <div className="collapse_icon">{text ? ArrowUp : ArrowDown}</div>
        {/* Affiche l'icône de flèche vers le haut si le contenu est affiché (état 'text' à true), ou l'icône de flèche vers le bas sinon (état 'text' à false) */}
      </div>
      <div>
        {text && ( // Si l'état local 'text' est true (le contenu doit être affiché), affiche le contenu de la section
          <div className="content animated">
            {/* Crée une section pour le contenu de la section, avec une animation */}
            <p>{content}</p> {/* Affiche le contenu de la section */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse; // Exporte le composant Collapse pour l'utiliser dans d'autres composants
