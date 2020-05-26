import React, { Fragment, useState, useEffect } from 'react'
import '../App.css';
import Search from './Search'
import Body from './Body'
import movieDataService from "../services/MovieService"
import movieDataApiService from "../services/MovieService"

const Index = () => {

    const [movies, setMovies] = useState([])    
    const [moviesApi, setMoviesApi] = useState([])
    const [keyWordSearch, setKeyWordSearch] = useState('')
    const [showMoviesDb, setShowMoviesDb] = useState(true)
    const [showMoviesApi, setShowMoviesApi] = useState(false)

    useEffect(() => {
        getMovieDataService();
        getMoviesApiServices();
    }, [keyWordSearch]);

    const getMovieDataService = () => {
        let url = encodeURIComponent(keyWordSearch.trim());
        let keyWord = !!url ? `?key_word=${url}` : "?";
        movieDataService.getMovies(keyWord)
        .then(response => {
            setMovies(response.data.response) 
        });
    }

    const getMoviesApiServices = () => {
        let url = encodeURIComponent(keyWordSearch.trim());
        let keyWord = `?name=${url}`
        movieDataApiService.searchMovieApi(keyWord)
        .then(response => {
          setMoviesApi(response.data.response) 
        });
    }

    const handleSearch = (keyWord) => {
        setKeyWordSearch(keyWord); 
    }


    return (
        <Fragment>
            <div className="App">
                <div className="App-header">
                    MOVIES TEST
                </div>
                <Search
                    handleSearch={handleSearch} 
                />
            
                <Body 
                    data={movies} 
                    dataApi={moviesApi} 
                    showMoviesDb={showMoviesDb}
                    setKeyWordSearch={setKeyWordSearch}
                    setShowMoviesDb={setShowMoviesDb}
                    showMoviesApi={showMoviesApi}
                    setShowMoviesApi={setShowMoviesApi}
                />
            </div>
        </Fragment>

    )
}


export default Index