// Importation Package, composants, image, data
import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import BGBannerAbout from "../assets/about_bg_banner.png";
import DataAbout from "../data/about.json";

// Mise en place de la page About de l'application, qui contient les composants "Banner" et "Collapse"

// Cette page About sera affichée entre le Header et Footer

const About = () => {
  document.title = "Kasa - A propos de nous";

  return (
    <main className="display_about">
      <Banner img={BGBannerAbout} />
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
