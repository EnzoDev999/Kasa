// Importation Package, image, style, etc...
import React from "react";
import backgroundHomeGris from "../assets/home_bg.png";

// On crée notre composant  Banner qui va contenier le filtre de la bannière ("backgroundHomeGris") et une {img} qui va être différente pour le format desktop et le format mobile
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
