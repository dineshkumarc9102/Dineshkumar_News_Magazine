import React from 'react';
import image from "../assets/image.png";

export const NewsItem = ({ title, description, src, url }) => {
  const imageSrc = src && src.trim() ? src : image;

  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px", minHeight: "450px" }} 
    >
      <img
        src={imageSrc}
        style={{ height: "200px", width: "100%", objectFit: "cover" }} 
        className="card-img-top"
        alt="News"
        onError={(e) => e.target.src = image} // Handles broken images
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ minHeight: "60px" }}>
          {title.length > 50 ? title.slice(0, 50) + "..." : title}
        </h5>
        <p className="card-text" style={{ minHeight: "90px" }}>
          {description
            ? description.length > 90
              ? description.slice(0, 90) + "..."
              : description
            : "News is a report of a current event. It is information about something that has just happened."}
        </p>
        <a href={url} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};
