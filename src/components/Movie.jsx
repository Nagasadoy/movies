import React from "react";

const Movie = (props) => {
    const {
        Poster: poster,
        Title: title,
        Year: year,
        Type: type
    } = props;
    return (
        <div className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                {
                    poster === 'N/A' ?
                        <img
                            className="activator"
                            src={`https://via.placeholder.com/300x400?text=${title}`}
                            alt=""
                        />
                        :
                        <img
                            className="activator"
                            src={poster}
                            alt=""
                        />
                }
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>
                <p>
                    Тип: {type}
                    <br />
                    Год выпуска:  {year}
                </p>
            </div>
        </div>
    );
}

export default Movie;