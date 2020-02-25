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
                    <option value='books'>Books Only</option>
                    <option value='magazines'>Magazines Only</option>
                </select>
                <label htmlFor='book-type'> Book Type: </label>
                <select id='print-type'>
                    <option value='null'>No Filter</option>
                    <option value='partial'>Partial text</option>
                    <option value='full'>Full text</option>
                    <option value='free-ebooks'>Free eBooks</option>
                    <option value='paid-ebooks'>Paid eBooks</option>
                    <option value='ebooks'>All eBooks</option>
                </select>
            </div>
        </form>
    )
}

export default Search;