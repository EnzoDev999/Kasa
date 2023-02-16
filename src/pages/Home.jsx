// Importation Package, composants, image
import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import BannerImgDesktop from "../assets/home_bg_banner.png";
import "../sass/pages/Home.scss";

// Mise en place de la page Home de l'application, qui contient les composants "Banner" et "Card"

// Cette page Home sera affichée entre le Header et Footer

export default function Home() {
  document.title = "Kasa - Accueil";
  return (
    <main className="display_home">
      <Banner
        img={BannerImgDesktop}
        texte1={"Chez vous,"}
        texte2={"partout et ailleurs"}
        alt="Image Acceuil"
      />
      <div className="display_card">
        <Card />
      </div>
    </main>
  );
}
