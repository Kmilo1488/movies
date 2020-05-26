import React, { Fragment } from 'react'

const MovieTableApi = props => {

    let {data} = props

    return (

        <Fragment>
            <div className="movies">
                { Array.isArray(data) && data.length ? (
                data.map(data => (
                    <div className="movie" key={data.id}>
                    <h2>{data.title}</h2>
                    <div>
                        <img
                        width="200"
                        alt={data.title}
                        src={`https://image.tmdb.org/t/p/w500/${data.poster_path || data.backdrop_path}`  }
                        />
                    </div>
                    <p>({data.release_date})</p>
                    </div>
                    ))
                ) : (
                    <p>No movies found</p>
                )}
            </div>

        </Fragment>

    )

}

export default MovieTableApi
