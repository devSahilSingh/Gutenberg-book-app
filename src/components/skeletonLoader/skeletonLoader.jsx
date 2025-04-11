import React from "react";
import "./SkeletonLoader.css";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-cover" />
      <div className="skeleton-title" />
      <div className="skeleton-author" />
    </div>
  );
};

export default SkeletonLoader;
