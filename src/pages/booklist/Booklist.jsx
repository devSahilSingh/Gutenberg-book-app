import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { FaArrowLeft } from "react-icons/fa";
import "./Booklist.css";
import SkeletonLoader from "../../components/skeletonLoader/skeletonLoader";
import AlertBox from "../../components/alertBox/AlertBox";
import BookCard from "../../components/bookCard/BookCard";
import SearchBar from "../../components/searchBar/SearchBar";
import useDebounce from "../../utils/useDebounce";
import { getPreferredBookUrl } from "../../utils/getPreferredBookUrl";
import { normalizeNextUrl } from "../../utils/normalizeNextUrl";

const BookList = () => {
  const { genre } = useParams();
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const debouncedSearch = useDebounce(search, 500);

  const baseUrl = "http://skunkworks.ignitesol.com:8000/books";

  // Function to fetch books from the API considering the genre and search term based on the URL
  const fetchBooks = async (url) => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setBooks((prev) => [...prev, ...data.results]);
      setNextUrl(normalizeNextUrl(data.next));
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error("Error fetching books:", err);
    }
  };

  /*  
  Function to get the initial URL based on the genre and search term
  It constructs the URL with the topic, search term, and mime type for images
   */
  const getInitialUrl = () => {
    const topicParam = `topic=${genre}`;
    const searchParam = debouncedSearch ? `&search=${debouncedSearch}` : "";
    const mimeParam = "&mime_type=image/";
    return `${baseUrl}?${topicParam}${searchParam}${mimeParam}`;
  };

  useEffect(() => {
    setBooks([]);
    fetchBooks(getInitialUrl());
  }, [genre, debouncedSearch]);

  /*
  Function to handle the click event on a book card
  It opens the book URL in a new tab or shows an alert if no viewable version is available
  */
  const handleBookClick = (book) => {
    const url = getPreferredBookUrl(book);
    if (url) {
      window.open(url, "_blank");
    } else {
      setShowAlert(true);
    }
  };

  return (
    <div className="booklist-container">
      <div className="booklist-header">
        <button className="back-btn" onClick={() => navigate("/")}>
          <FaArrowLeft />
        </button>
        <h2 className="genre-title">{genre}</h2>
      </div>
      <SearchBar search={search} setSearch={setSearch} />
      <InfiniteScroll
        dataLength={books.length}
        next={() => fetchBooks(nextUrl)}
        hasMore={!!nextUrl}
      >
        <div className="books-grid">
          {isLoading && books.length === 0 ? (
            Array.from({ length: 18 }).map((_, i) => <SkeletonLoader key={i} />)
          ) : books.length > 0 ? (
            books.map((book, index) => (
              <BookCard
                key={`${book.id}-${index}`}
                book={book}
                onClick={() => handleBookClick(book)}
              />
            ))
          ) : (
            <div className="no-data">No Data Found</div>
          )}
        </div>
      </InfiniteScroll>
      {showAlert && (
        <AlertBox
          message="No viewable version available"
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

export default BookList;
