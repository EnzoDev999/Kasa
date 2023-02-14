// Importation Package, date logement
import React from "react";
// <Link>est un élément qui permet à l'utilisateur de naviguer vers une autre page en cliquant ou en appuyant dessus.
import { Link } from "react-router-dom";
import DataProperty from "../data/housings.json";
import PropTypes from "prop-types";

// Création d'un lien sur chaque card renvoyant vers l'appartement associé à la card avec Link

// La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
// Key : Les clés aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés.
// Key : Vous devez donner une clé à chaque élément dans un tableau afin d’apporter aux éléments une identité stable

// Affichage de chaque appartement avec la méthode map appliquée au fichier .json contenant la liste des appartements

// Card Logique : Utilisation de Link (to = route) / img de chaque logements / titre de chaque logements

const Card = () => {
  return (
    <div className="card_container">
      {DataProperty.map((property) => (
        <Link
          to={`/housing/${property.id}`}
          key={property.id}
          className="card_link"
        >
          <div className="img_container" key={property.id}>
            <img
              className="card_img"
              src={property.cover}
              alt={property.title}
            />
            <h3 className="card_title">{property.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

// PropTypes exporte un ensemble de validateurs qui peuvent être utilisés pour s’assurer que la donnée que vous recevez est valide.
Card.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
};

export default Card;
