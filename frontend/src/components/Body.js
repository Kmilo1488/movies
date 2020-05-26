import React, { Fragment } from 'react'
import MovieTable from './movies/MovieTable'
import AddMovie from './movies/AddMovie.js'
import MovieTableApi from './movies/MovieTableApi'

const Body = props => {

    let {data, dataApi, showMoviesDb, setShowMoviesDb, showMoviesApi, setShowMoviesApi, setKeyWordSearch} = props

    const handleOnClickDbMovies = () => {
        setShowMoviesApi(!showMoviesApi);
        setShowMoviesDb(!showMoviesDb);
        setKeyWordSearch('');
    }

    const handleOnClickApiMovies = () => {
        setShowMoviesApi(!showMoviesApi);
        setShowMoviesDb(!showMoviesDb);
        setKeyWordSearch('');
    }

    return (
      
        <Fragment>
            <div className="choose-movies">
          
                {showMoviesApi ? (
                    <div>
                        <button onClick={handleOnClickApiMovies}>Show movies DB</button>
                        <MovieTableApi data={dataApi} />
                    </div>

                ) : (
                    <div>
                        <button onClick={handleOnClickDbMovies}>Show movies API</button>
                        <AddMovie />
                        <MovieTable data={data} />
                    </div>

                )}

            </div> 
        </Fragment>
    )
}

export default Body
