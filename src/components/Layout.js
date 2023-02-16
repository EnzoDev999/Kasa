// Importation Package, composants, style
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../sass/components/Layout.scss"; // style

//  Mise en place du Layout, constitué des composants "Header" et "Footer" et appelé une fois pour toutes dans le composant général index.js

// Le rops.children permet d'afficher toutes les autres pages ; entre notre Header et Footer
const Layout = (props) => {
  return (
    <div className="body">
      <div className="Layout">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
