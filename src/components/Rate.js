import React from "react";
import "../sass/utils/_variables.scss";
import "../sass/components/Rate.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Mise en place du composant Rate qui va permettre de savoir le taux d'étoile dans une page logement

const Rate = ({ rating }) => {
  // Tableau d'étoiles
  const stars = [1, 2, 3, 4, 5];

  // Icon Etoile rouge
  const star = <FontAwesomeIcon icon={faStar} style={{ color: "#ff6060" }} />;
  // Icon Etoile Grise
  const greyStar = (
    <FontAwesomeIcon icon={faStar} style={{ color: "#E3E3E3" }} />
  );

  return (
    // La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
    stars.map((level, index) =>
      // Si le nombre correspondant à rangeElem est plus petit ou égal au chiffre contenu dans la prop rating,
      // on affiche le nombre d'étoiles rouge équivalent
      level <= rating ? (
        <div key={index} className="starIcon">
          {star}
        </div>
      ) : (
        // La différence entre range et rating est affichée par des étoiles grises
        <div key={index} className="starIcon">
          {greyStar}
        </div>
      )
    )
  );
};

export default Rate;
