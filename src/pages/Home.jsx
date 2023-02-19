import React from "react";
import Banner from "../components/Banner"; // Importation du composant Banner
import Card from "../components/Card"; // Importation du composant Card
import BannerImgDesktop from "../assets/home_bg_banner.png"; // Importation de l'image de fond pour la bannière
import "../sass/pages/Home.scss"; // Importation du fichier de styles CSS pour la page Home

export default function Home() { // Définition du composant fonctionnel Home
  document.title = "Kasa - Accueil"; // Changement du titre de la page

  return ( // Rendu de la page
    <main className="display_home"> {/* Début de la section principale de la page */}
      <Banner
        img={BannerImgDesktop}
        texte1={"Chez vous,"}
        texte2={"partout et ailleurs"}
        alt="Image Acceuil"
      /> {/* Affichage de la bannière avec l'image de fond et les textes */}
      <div className="display_card"> {/* Section de la page affichant les cartes */}
        <Card /> {/* Affichage des cartes */}
      </div>
    </main> // Fin de la section principale de la page
  );
}
