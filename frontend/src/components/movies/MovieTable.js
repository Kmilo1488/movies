import React, { Fragment } from 'react'
import NoCover from '../../No_Cover.jpg';

const MovieTable = props => {

    let {data} = props

    return (

        <Fragment>
            <div className="movies">

                {data.length > 0 ? (
                data.map(data => (
                    <div className="movie" key={data.id}>
                    <h2>{data.title}</h2>
                    <div>
                        <img
                        width="200"
                        alt={data.title}
                        src={NoCover}
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

export default MovieTable
