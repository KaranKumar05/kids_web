import React from "react";

import './sectionTitle.css'

function SectionTitle({ title }) {
  return (
    <div className="sectionTitleContainer">
      <h1>{title}</h1>
      <div></div>
    </div>
  );
}

export default SectionTitle;
