import React from "react";

const NoGenreFound = ({genre}) => {
  return (
    <div className="no-genre-container">
      <h1 className="no-genre-heading">
        Oops! It looks like we don't have {genre} in our collection right
        now.
      </h1>
      <p className="no-genre-message">
        We're always working to expand our selection, so feel free to check back
        soon. In the meantime, you can explore other genres or let us know what
        you'd like to see! Your feedback helps us grow.
      </p>
      <div className="no-genre-buttons">
        <button
          className="no-genre-button"
          onClick={() => (window.location.href = "/popular-genres")}
        >
          Browse Popular Genres
        </button>
        <span className="no-genre-separator"> | </span>
        <button
          className="no-genre-button"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us for Suggestions
        </button>
      </div>
    </div>
  );
};

export default NoGenreFound;
