import React from "react";

const TvItem = ({ episode }) => {
  return (
    <div className="card">
      <div className="zoom-effect-container">
        <div className="image-card">
          <img
            className="poster"
            src={`/assets/${episode.image}`}
            alt="Card image cap"
          />
        </div>
      </div>

      <div className="card-body">
        <h5 className="card-title">{episode.name}</h5>
        <div className="card-text">
          <ul>
            <li>
              Season {episode.season} , Episode {episode.episode}
            </li>
            <li>{episode.formats.join(" | ")}</li>
            <li>{episode.builtInSubs && "Built-in Subtitles"}</li>
          </ul>
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  );
};

export default TvItem;
