import React, { Fragment, useState } from 'react'
import '../App.css';

const Search = props => {

    let {handleSearch} = props

    const [searchInput, setSearchInput] = useState('')

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }

    const callSearch = (event) => {
        event.preventDefault();
        handleSearch(searchInput);
        resetInputField();
    }

    const resetInputField = () => {
        setSearchInput('');
    }

    return (
        <Fragment>
            <form className="search">
                <input
                    value={searchInput}
                    onChange={handleChange}
                    type="text"
                />
                <input onClick={callSearch} type="submit" value="SEARCH" />

            </form>

        </Fragment>
    )
}

export default Search