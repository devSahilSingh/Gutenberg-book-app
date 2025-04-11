import React from "react";
import "./Home.css";
import GenreCard from "../../components/genreCard/GenreCard";
import {
  FaFlask,
  FaTheaterMasks,
  FaLaughBeam,
  FaLandmark,
  FaYinYang,
  FaBookOpen,
  FaGlobe,
} from "react-icons/fa";

const genres = [
  { name: "Fiction", icon: <FaFlask color="#5E56E7" /> },
  { name: "Drama", icon: <FaTheaterMasks color="#5E56E7" /> },
  { name: "Humour", icon: <FaLaughBeam color="#5E56E7" /> },
  { name: "Politics", icon: <FaLandmark color="#5E56E7" /> },
  { name: "Philosophy", icon: <FaYinYang color="#5E56E7" /> },
  { name: "History", icon: <FaBookOpen color="#5E56E7" /> },
  { name: "Adventure", icon: <FaGlobe color="#5E56E7" /> },
];

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">Gutenberg Project</h1>
      <p className="subtitle">
        A social cataloging website that allows you to freely search its
        database of books, annotations, and reviews.
      </p>
      <div className="genre-grid">
        {genres.map((genre) => (
          <GenreCard key={genre.name} genre={genre.name} icon={genre.icon} />
        ))}
      </div>
    </div>
  );
};

export default Home;
