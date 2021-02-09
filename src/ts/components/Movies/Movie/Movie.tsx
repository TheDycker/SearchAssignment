import React, { FunctionComponent } from "react";

interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
}

const Movie: FunctionComponent<{ movie: IMovie }> = (props) => {
  const { Poster, Title, Type, Year } = props.movie;

  return (
    <div className="video-item item mb-2">
      <img alt={Title} className="ui image" src={Poster} />
      <div className="content">
        <div>Title: {Title}</div>
        <div>Type: {Type}</div>
        <div>Year of Production: {Year}</div>
      </div>
    </div>
  );
};

export default Movie;
