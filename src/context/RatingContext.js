import { createContext, useState, useEffect } from "react";

const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [activeGenres, setActiveGenres] = useState([]);
  const [loading, setLoading] = useState(false);

  const changeCurrentPage = (number) => {
    if (number >= 0 && number <= totalPages) {
      setCurrentPage(number);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (totalPages > 500) {
      setTotalPages(500);
    }
  }, [totalPages]);

  const reset = () => {
    setActiveGenres([]);
    setCurrentPage(1);
  };

  return (
    <RatingContext.Provider
      value={{
        movies,
        setMovies,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        changeCurrentPage,
        activeGenres,
        setActiveGenres,
        loading,
        setLoading,
        reset,
      }}
    >
      {children}
    </RatingContext.Provider>
  );
};

export default RatingContext;
