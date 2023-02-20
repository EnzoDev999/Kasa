import React, { useState } from "react"; // Importe la bibliothèque React et la fonction useState pour gérer l'état local du composant
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importe la bibliothèque FontAwesome pour utiliser des icônes
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"; // Importe des icônes de flèches de FontAwesome
import "../sass/components/Carousel.scss"; // Importe le fichier de styles CSS pour le composant

const Carousel = ({ pictures }) => {
  // Déclare le composant Carousel qui prend une propriété 'pictures', un tableau d'URL d'images
  const [current, setCurrent] = useState(0); // Initialise l'état local 'current' à 0, qui représente l'index de l'image actuellement affichée
  const length = pictures.length; // Détermine la longueur du tableau d'URL d'images

  const previousPicture = () => {
    // Définit la fonction pour passer à l'image précédente
    setCurrent(current === 0 ? length - 1 : current - 1); // Met à jour l'index de l'image actuelle en fonction de la position de l'utilisateur (si l'utilisateur est sur la première image, l'index est défini sur la dernière image, sinon l'index est décrémenté de 1)
  };

  const nextPicture = () => {
    // Définit la fonction pour passer à l'image suivante
    setCurrent(current === length - 1 ? 0 : current + 1); // Met à jour l'index de l'image actuelle en fonction de la position de l'utilisateur (si l'utilisateur est sur la dernière image, l'index est défini sur la première image, sinon l'index est incrémenté de 1)
  };

  const ArrowRight = <FontAwesomeIcon icon={faChevronRight} />; // Crée un élément <FontAwesomeIcon> pour afficher l'icône de flèche droite
  const ArrowLeft = <FontAwesomeIcon icon={faChevronLeft} />; // Crée un élément <FontAwesomeIcon> pour afficher l'icône de flèche gauche

  return (
    <div className="slider">
      {/* Crée un conteneur pour le composant Carousel */}
      <img
        className="slideImg"
        src={pictures[current]} // Affiche l'image actuelle en fonction de l'index stocké dans l'état local 'current'
        alt={pictures.title}
        key={current} // Attribue une clé unique à l'image pour améliorer les performances lors de la mise à jour du DOM
      />
      {length > 1 && ( // Si le nombre d'images est supérieur à 1, affiche la flèche gauche
        <div className="leftArrow" onClick={previousPicture}>
          {ArrowLeft}
        </div>
      )}
      <div className="slideCounter">
        {/* Affiche le numéro de l'image actuelle par rapport au nombre total d'images */}
        {current + 1}/{length}
      </div>
      {length > 1 && ( // Si le nombre d'images est supérieur à 1, affiche la flèche droite
        <div className="rightArrow" onClick={nextPicture}>
          {ArrowRight}
        </div>
      )}
    </div>
  );
};

export default Carousel; // Exporte le composant Carousel pour l'utiliser dans d'autres composants
