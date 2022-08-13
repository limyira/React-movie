import React from "react";
import { useState, useEffect } from "react";

const Movies = ({ id, coverImg, title, summary, genres }) => {
  return (
    <div key={id}>
      <img src={coverImg} />
      <h4>{title}</h4>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};
export default Movies;
