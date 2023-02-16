// Importation Package, logo, style
import React from "react";
import LogoFooter from "../assets/LOGO_footer.png";
import "../sass/components/Footer.scss";

// Composant qu'on retrouve dans Layout avec le Header pour être affiché sur toutes les pages
// Composant Footer : Logo + paragraphe
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <img className="footerLogo" src={LogoFooter} alt="Logo Kasa" />
        <p className="footerText">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
