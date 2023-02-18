// Importer les bibliothèques et les fichiers nécessaires
import React from "react"; // Importer la bibliothèque React
import ReactDOM from "react-dom/client"; // Importer la bibliothèque ReactDOM

import Routes from "./Routes"; // Importer le composant Routes depuis le fichier Routes.js

import { BrowserRouter } from "react-router-dom"; // Importer le composant BrowserRouter depuis le package react-router-dom

import "./sass/index.scss"; // Importer la feuille de style index.scss depuis le dossier sass

import Layout from "./components/Layout"; // Importer le composant Layout depuis le fichier Layout.js

// Créer une racine pour l'arbre React en utilisant ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendre l'application React à l'aide de la fonction root.render()
root.render(
  // Utiliser le composant BrowserRouter pour ajouter des capacités de routage à l'application
  <BrowserRouter>
    {/* Utiliser le composant React.StrictMode pour mettre en évidence les problèmes potentiels de l'application pendant le développement */}
    <React.StrictMode>
      {/* Utiliser le composant Layout pour ajouter une mise en page générale à l'application */}
      <Layout>
        {/* Utiliser le composant Routes pour définir la logique de routage de l'application */}
        <Routes />
      </Layout>
    </React.StrictMode>
  </BrowserRouter>
);
