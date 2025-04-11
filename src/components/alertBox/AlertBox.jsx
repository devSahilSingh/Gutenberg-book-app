import React from "react";
import "./AlertBox.css";
import { FaTimes } from "react-icons/fa";

const AlertBox = ({ message, onClose }) => {
  return (
    <div className="alert-toast">
      <span className="alert-message">{message}</span>
      <FaTimes className="alert-close-icon" onClick={onClose} />
    </div>
  );
};

export default AlertBox;
