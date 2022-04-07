import React from "react";
import classes from "./GiffyCard.module.scss";
import GifVideo from "./GiffyVideo";
const COLOR_SWATCH = [
  "rgb(119, 255, 64, 0.5)",
  "rgb(230, 186, 55, 0.5)",
  "rgb(250, 105, 76, 0.5)",
  "rgb(163, 57, 227, 0.5)",
  "rgb(74, 180, 255, 0.5)",
  "rgb(210, 255, 40, 0.5)",
];

const GifImage = ({ image, title = "" }) => {
  return (
    <picture>
      <source srcset={image.webp} type="image/webp" />
      <img
        style={{ borderRadius: "8px" }}
        height={image.height > 120 ? image.height : 120}
        alt={title}
        src={image.url}
      />
    </picture>
  );
};

const GiffyCard = ({ giffy, type = "GIF" }) => {
  const image = giffy.images.fixed_width;
  return (
    <div
      style={{
        backgroundColor:
          COLOR_SWATCH[Math.floor(Math.random() * (COLOR_SWATCH.length + 1))],
        height: `${image.height > 80 ? image.height : 120}px`,
      }}
      title={giffy.title}
      className={classes.card}
    >
      {type === "GIF" ? (
        <GifImage image={image} title={giffy.title} />
      ) : (
        <GifVideo image={image} title={giffy.title} />
      )}
    </div>
  );
};

export default GiffyCard;
