import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import BookList from "./pages/booklist/Booklist";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:genre" element={<BookList />} />
      </Routes>
    </Router>
  );
}

export default App;