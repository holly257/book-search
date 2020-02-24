import React from 'react';
import './search.css';

function Search(){
    return(
        <form>
            <div>
                <label className='search-box' htmlFor='search'>Search: </label>
                <input
                    type='text'
                    name='search'
                    id='search'
                    placeholder=''
                >
                </input>
                <button>SEARCH!</button>
            </div>
            <div>
                <label htmlFor='print-type'>Print Type: </label>
                <select id='print-type'>
                    <option value='All'>All</option>
                    <option value='ebook'>ebook</option>
                </select>
                <label htmlFor='book-type'> Book Type: </label>
                <select id='print-type'>
                    <option value='none'>No Filter</option>
                    <option value='other'>other</option>
                </select>
            </div>
        </form>
    )
}

export default Search;