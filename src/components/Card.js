import React from "react"; // Import de la bibliothèque React
import { Link } from "react-router-dom"; // Import du composant Link pour la navigation à l'intérieur de l'application
import DataProperty from "../data/lodgings.json"; // Import des données des logements stockées dans un fichier JSON
import PropTypes from "prop-types"; // Import de PropTypes pour définir les types de données attendus pour les propriétés du composant
import "../sass/components/Card.scss"; // Import des styles pour le composant Card

// Définition du composant Card
const Card = () => {
  return (
    // Création d'un conteneur pour tous les éléments
    <div className="card_container">
      {DataProperty.map(
        // Itération à travers les données de propriété pour afficher chaque propriété
        (property) => (
          // nous créons un lien vers la page de logement correspondante en utilisant le composant Link
          <Link
            to={`/lodging/${property.id}`}
            key={property.id} // Définit la clé unique pour chaque élément dans la liste générée par la méthode `map`
            className="card_link"
          >
            {/* Création d'un conteneur pour l'image et le titre de la propriété */}
            <div className="img_container" key={property.id}>
              {/* Affichage de l'image de couverture de la propriété avec l'alternative textuelle fournie */}
              <img
                className="card_img"
                src={property.cover}
                alt={property.title}
              />
              {/* Affichage du titre de la propriété */}
              <h3 className="card_title">{property.title}</h3>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

Card.propTypes = {
  // Définition des types de données attendus pour les propriétés du composant
  title: PropTypes.string,
  cover: PropTypes.string,
};

export default Card; // Export du composant Card pour qu'il puisse être utilisé ailleurs dans l'application
