// Importer les composants React et ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Importer les routes
import Routes from "./Routes";

// Importer le composant BrowserRouter de React Router
import { BrowserRouter } from "react-router-dom";

// Importer le fichier d'index SASS
import "./sass/index.scss";

// Importer le composant Layout
import Layout from "./components/Layout";

// Créer la racine du DOM avec ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Layout est un composant qui contient notre composant Header et Footer
// <Routes> est contenu dans Layout afin que l'Header et le Footer soit affiché sur toute les pages.
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Layout>
        <Routes />
      </Layout>
    </React.StrictMode>
  </BrowserRouter>
);
