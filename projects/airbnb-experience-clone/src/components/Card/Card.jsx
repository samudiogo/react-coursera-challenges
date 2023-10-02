import React from "react";
import starLogo from "../../assets/star-logo.svg";
import circleIcon from "../../assets/circle-icon.svg";
export const Card = ({
  title,
  coverImg,
  stats,
  price,
  openSpots,
  location,
}) => {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = location.toUpperCase();
  }
  return (
    <div className="card">
      <section className="card--image-box">
        {badgeText && <span className="card--image-status">{badgeText}</span>}
        <img src={`public/images/${coverImg}`} alt={title} />
      </section>
      <section className="card--highlight-body">
        <img src={starLogo} alt="rating logo" />
        <span className="card--highlight-rating">
          {Number.parseFloat(stats.rating).toPrecision(2)}
        </span>
        <span className="card--highlight-review-count">
          ({stats.reviewCount})
        </span>
        <img src={circleIcon} alt=" cicle icon" />
        <span className="card--highlight-country">{location}</span>
      </section>
      <h3 className="card--title">{title}</h3>
      <p className="card--price">
        <span>From ${price}</span> / person
      </p>
    </div>
  );
};
