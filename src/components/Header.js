// Importation Package, logo, style
import React from "react";
import "../sass/components/Header.scss";
//  <NavLink> est un type particulier de <Link> qui sait s'il est "actif" ou non. Ceci est utile lors de la création d'un menu de navigation
import { NavLink } from "react-router-dom";
import Logo from "../assets/LOGO.png";

// Navlink : isActive permet de savoir si l'utilisateur est sur quelle page
// isActive : fonction : Une fonction pour ajouter une logique supplémentaire pour déterminer si le lien est actif.

// Composant "Header", utilisation de NavLink pour la redirection des liens "Accueil" et "À propos" afin de savoir si le lien est actif.
// Composant qu'on retrouve dans Layout avec le Footer pour être affiché sur toutes les pages
// Composant Header : Logo + navigation
const Header = () => {
  // Déclare le composant Header
  return (
    <header className="headerContainer">
      {" "}
      {/* Crée une section d'en-tête pour la page */}
      <img className="logo" src={Logo} alt="Kasa logo" />{" "}
      {/* Affiche le logo de Kasa */}
      <ul className="navigation">
        {" "}
        {/* Crée une liste pour la navigation */}
        <li>
          <NavLink // Crée un lien de navigation pour la page d'accueil
            to="/kasa" // Indique la destination du lien
            end // Indique que ce lien est la page d'accueil
            className={({ isActive }) =>
              isActive ? "accueil_navbar active" : "accueil_navbar"
            } // Applique la classe CSS "active" si le lien est actif (sur la page d'accueil)
          >
            Accueil {/* Affiche le texte du lien */}
          </NavLink>
        </li>
        <li>
          <NavLink // Crée un lien de navigation pour la page "A propos"
            to="/about" // Indique la destination du lien
            className={({ isActive }) =>
              isActive ? "about_navbar active" : "about_navbar"
            } // Applique la classe CSS "active" si le lien est actif (sur la page "A propos")
          >
            A Propos {/* Affiche le texte du lien */}
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
