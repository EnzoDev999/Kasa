// Importation Package, icon, style, etc...
import React, { useState } from "react";

import "../styles/components/Carousel.scss";

// Icon flèche
const ArrowRight = <i className="fa-solid fa-chevron-right"></i>;
const ArrowLeft = <i className="fa-solid fa-chevron-left"></i>;

// Créaction du Composant Carrousel, en cliquant sur la flèche de gauche ou droite pour afficher l'image

const Carousel = ({ pictures }) => {
  // Le hook useState permet de faire varier l'index de l'array pictures, état initial à 0
  const [current, setCurrent] = useState(0); // première image à 0

  const length = pictures.length; // Longueur du tableau pictures

  // Fonction previousPicture qui actualise l'index au clic sur la flèche "précèdent" du carrousel
  const previousPicture = () => {
    // L'opérateur (ternaire) conditionnel => condition ? exprSiVrai : exprSiFaux
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Fonction nextPicture qui actualise l'index de l'array pictures au clic sur la flèche "suivante" du carousel
  const nextPicture = () => {
    // L'opérateur (ternaire) conditionnel => condition ? exprSiVrai : exprSiFaux
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="slider">
      <img
        className="slideImg"
        // L'index de l'array, matérialisé par 'currentIndex', est rendu dynamique grâce au hook useState
        src={pictures[current]}
        alt={pictures.title}
        key={current}
      />

      {/* Affichage des flèches seulement si length > 1 */}
      {length > 1 && (
        // Affichage conditionnel de la flèche "précédent" en fonction du nombre d'images dans l'array pictures
        <div className="leftArrow" onClick={previousPicture}>
          {ArrowLeft}
        </div>
      )}

      {/* Conteur */}
      <div className="slideCounter">
        {current + 1}/{length}
      </div>

      {length > 1 && (
        <div className="rightArrow" onClick={nextPicture}>
          {ArrowRight}
        </div>
      )}
    </div>
  );
};

export default Carousel;
