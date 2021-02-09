import React, { FunctionComponent, useEffect, useState } from "react";
import Movie from "./Movie/Movie";
const Movies: FunctionComponent<{ searchTerm: string }> = (props) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://www.omdbapi.com/?apikey=a60d62fd&s=" + props.searchTerm
        );
        const data = await response.json();
        console.log(data);
        if (data.Response === "True") {
          setMovies(data.Search);
          setError("");
          console.log(data.Search.length);
        } else {
          setError(data.Error);
          setMovies([]);
        }
      } catch (error) {}
    };
    const timeoutId = setTimeout(() => {
      if (props.searchTerm) {
        fetchData();
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [props.searchTerm]);
  let content;

  if (error !== "")
    return <p style={{ display: "flex", justifyContent: "center" }}>{error}</p>;
  if (movies.length) {
    content = movies.map((movie: any) => {
      return <Movie key={movie.imdbID} movie={movie} />;
    });
  }

  return (
    <React.Fragment>
      <div className="ui celled list">{content}</div>
    </React.Fragment>
  );
};

export default Movies;
