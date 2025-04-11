import React from "react";
import "./GenreCard.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const GenreCard = ({ genre, icon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/books/${genre.toLowerCase()}`);
  };

  return (
    <div className="genre-card" onClick={handleClick}>
      <div className="genre-info">
        <span className="genre-icon">{icon}</span>
        <span className="genre-name">{genre}</span>
      </div>
      <div>
        <span className="arrow">
          <FaArrowRight color="#5E56E7" />
        </span>
      </div>
    </div>
  );
};

export default GenreCard;
