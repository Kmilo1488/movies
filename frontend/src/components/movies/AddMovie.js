import React, { useState } from "react";
import movieDataService from "../../services/MovieService"

const AddMovie = () => {
  const initialMovieState = {
    title: "",
    overview: "",
    release_date: ""
  };
  const [movie, setMovie] = useState(initialMovieState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { title, value } = event.target;
    setMovie({ ...movie, [title]: value });
  };

  const saveMovie = () => {
    let data = {
      title: movie.title,
      overview: movie.overview,
      release_date: movie.release_date
    };

    movieDataService.createMovie(data)
      .then(response => {
        setMovie({
          title: response.data.title,
          overview: response.data.overview,
          release_date: response.data.release_date
        });
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newMovie = () => {
    setMovie(initialMovieState);
    setSubmitted(false);
  };

  return (
    <div className="add-movie">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button classtitle="btn btn-success" onClick={newMovie}>
            Add
          </button>
        </div>
      ) : (
        <div className="form-movie">
          <div className="form-movie-input">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              required
              value={movie.title}
              onChange={handleInputChange}
              title="title"
            />
          </div>

          <div className="form-movie-input">
            <label htmlFor="overview">Description</label>
            <input
              type="text"
              id="overview"
              required
              value={movie.overview}
              onChange={handleInputChange}
              title="overview"
            />
          </div>

          <div className="form-movie-input">
            <label htmlFor="release_date">Release Date</label>
            <input
              type="date"
              id="release_date"
              required
              value={movie.release_date}
              onChange={handleInputChange}
              title="release_date"
            />
          </div>

          <button onClick={saveMovie} classtitle="btn btn-success">
            Create
          </button>
        </div>
      )}
    </div>
  );
};


export default AddMovie;