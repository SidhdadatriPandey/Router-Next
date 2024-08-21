"use client"
import React from "react";

// Define the shape of the card data
interface CardData {
  image: {
    url: string;
  };
  title: string;
  description: string;
}

// Define an interface for the component props
interface CardProps {
  info: CardData;
}

const Card: React.FC<CardProps> = ({ info }) => {
  const { image, title, description } = info;
  const truncatedDescription = description.length > 100
    ? description.substring(0, 100) + '...'
    : description;

  return (
    <div className="card">
      <div className="card-child">
        <img
          className="card-image"
          alt={title} // Improved alt text for accessibility
          src={image.url}
        />
      </div>
      <div className="content">
        <p className="title">{title}</p>
        <p>{truncatedDescription}</p>
      </div>
    </div>
  );
};

export default Card;
