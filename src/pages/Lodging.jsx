import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel"; // Composant de carousel
import LodgingData from "../data/lodgings.json"; // Données des logements stockées dans un fichier JSON
import Collapse from "../components/Collapse"; // Composant Collapse pour afficher le texte avec une espèce d'affichage déroulant
import LodgingsInfo from "../components/LodgingInfo"; // Composant pour afficher les informations sur le logement
import "../sass/pages/Lodging.scss"; // Styles spécifiques à la page de logement

const Lodging = () => {
  const urlParams = useParams(); // Récupère les paramètres de l'URL, dans ce cas, l'ID du logement
  const navigate = useNavigate(); // Fonction de navigation pour changer d'URL

  useEffect(() => {
    // Effectue une action lorsque l'ID du logement dans l'URL change
    const matchingLodging = LodgingData.find(lodging => urlParams.id === lodging.id);
    if (!matchingLodging) {
      navigate("*"); // Si aucun logement ne correspond à l'ID dans l'URL, redirige vers la page d'erreur (*)
    }
  }, [urlParams.id, navigate]);

  return (
    <>
      {LodgingData.filter(lodging => lodging.id === urlParams.id).map(lodging => {
        const { title, location, tags, host, rating, description, equipments } = lodging;

        return (
          <main key={title}>
            <Carousel pictures={lodging.pictures} /> {/* Affiche le carousel avec les images du logement */}
            {/* Affiche les informations sur le logement, telles que le titre, la localisation, les tags, le nom de l'hôte et les avis */}
            <LodgingsInfo
              title={title}
              location={location}
              tags={tags}
              host={host}
              rating={rating}
            />
            <section className="collapses_Container">
              <div className="collapse ">
                <Collapse title="Description" content={description} /> {/* Affiche la description du logement avec une espèce d'affichage déroulant */}
              </div>
              <div className="collapse equipement">
                <Collapse // Affiche les équipements du logement avec une espèce d'affichage déroulant
                  title="Équipements"
                  content={equipments.map((equipment, index) => (
                    <span className="Lodging_equipement" key={index}>
                      {equipment}
                    </span>
                  ))}
                /> 
              </div>
            </section>
          </main>
        );
      })}
    </>
  );
};

export default Lodging;
