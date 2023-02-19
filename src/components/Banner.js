import React from "react";
import backgroundHomeGris from "../assets/home_bg.png";
import "../sass/components/Banner.scss";

// Création du composant "Banner" prend en paramètres plusieurs propriétés, ici on a une image prédéfinit avec,
// la superposition d'un fond gris afin d'assombrir un peu l'image du background. Suivit de ses textes prioritaires.

const Banner = ({ img, texte1, texte2, alt }) => {
  return (
    <div className="banner_container">
      <img className="backgroundImgHome" src={img} alt={alt} />
      <img className="backgroundHomeGris" src={backgroundHomeGris} alt={alt} />
      <div className="banner_text">
        <p>{texte1}</p>
        <p>{texte2}</p>
      </div>
    </div>
  );
};

export default Banner;
