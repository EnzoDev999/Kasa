import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import BGBannerAbout from "../assets/about_bg_banner.png";
import DataAbout from "../data/about.json";
import "../sass/pages/About.scss";

const About = () => {
  // Définit le titre de la page
  document.title = "Kasa - A propos de nous";

  return (
    <main className="display_about">
      {/* Composant Banner avec l'image de fond */}
      <Banner img={BGBannerAbout} />

      {/* Boucle à travers le tableau de données à propos et crée un composant Collapse pour chaque élément */}
      <div className="display_collapses">
        {DataAbout.map((collapse, index) => (
          <div className="collapsesContainer" key={index}>
            <Collapse
              id={collapse.id}
              title={collapse.title}
              content={collapse.content}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default About;
