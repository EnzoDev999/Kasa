import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import LodgingData from "../data/lodgings.json"; // Importe les données des logements depuis le fichier JSON
import Collapse from "../components/Collapse";
import LodgingsInfo from "../components/LodgingInfo";
import "../styles/pages/Lodging.scss"; // Importe les styles CSS pour la page des logements

const Lodging = () => {
  const urlParams = useParams(); // Récupère les paramètres de l'URL de la page courante
  const navigate = useNavigate(); // Initialise la fonction useNavigate pour permettre la redirection de l'utilisateur

  // Le hook useEffect gère ici le renvoi vers la page d'erreur en cas d'incohérence entre l'id d'un logement et l'id contenu dans
  // le paramètre de l'URL de la page courante
  useEffect(() => {
    const matchingLodging = LodgingData.find(lodging => urlParams.id === lodging.id);
    if (!matchingLodging) {
      navigate("*");
    }
  }, [urlParams.id, navigate]);

  return (
    <>
      {LodgingData.filter(lodging => lodging.id === urlParams.id).map(lodging => {
        const { title, location, tags, host, rating, description, equipments } = lodging;

        return (
          <main key={title}>
            <Carousel pictures={lodging.pictures} /> {/* Affiche un carrousel d'images pour le logement */}
            <LodgingsInfo
              title={title}
              location={location}
              tags={tags}
              host={host}
              rating={rating}
            /> {/* Affiche les informations principales du logement */}
            <section className="collapses_Container">
              <div className="collapse ">
                <Collapse title="Description" content={description} /> {/* Affiche la description du logement */}
              </div>
              <div className="collapse equipement">
                <Collapse
                  title="Équipements"
                  content={equipments.map((equipment, index) => (
                    <span className="Lodging_equipement" key={index}>
                      {equipment}
                    </span>
                  ))}
                /> {/* Affiche les équipements du logement sous forme de liste */}
              </div>
            </section>
          </main>
        );
      })}
    </>
  );
};

export default Lodging;
