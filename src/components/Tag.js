import React from "react";
import "../sass/components/Tag.scss";

// Composant qui affiche les tags d'un appartement

const Tag = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((element, index) => {
        return <span key={index}>{element}</span>;
      })}
    </div>
  );
};

export default Tag;
