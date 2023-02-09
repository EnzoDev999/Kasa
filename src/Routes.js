// Importation des packages, pages, etc.
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Housing from "./pages/Housing";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// La fonction `App` qui va afficher le code HTML/CSS/JS de chacune de nos pages
function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route vers la page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Route vers la page de détail de chaque logement */}
        <Route path="/logement/:id" element={<Housing />} />

        {/* Route vers la page "À propos" */}
        <Route path="/about" element={<About />} />

        {/* Route par défaut vers la page d'erreur 404 en cas d'URL incorrecte */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
