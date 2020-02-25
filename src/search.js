import React from 'react';
import './search.css';

function Search(props){
    return(
        <form>
            <div>
                <label className='search-box' htmlFor='search'>Search: </label>
                <input
                    type='text'
                    name='searchTerm'
                    id='search'
                    placeholder=''
                    onChange={props.handleChange}
                    value={props.data.searchTerm}
                >
                </input>
            </div>

            <div>
                <label htmlFor='print-type'>Print Type: </label>
                <select 
                    id='print-type'
                    value={props.data.printType}
                    name='printType'
                    onChange={props.handleChange}
                >
                    <option value='All'>All</option>
                    <option value='books'>Books Only</option>
                    <option value='magazines'>Magazines Only</option>
                </select>

                <label htmlFor='book-type'> Book Type: </label>
                <select 
                    id='book-type'
                    value={props.data.bookType}
                    name='bookType'
                    onChange={props.handleChange}
                >
                    <option value='null'>No Filter</option>
                    <option value='partial'>Partial text</option>
                    <option value='full'>Full text</option>
                    <option value='free-ebooks'>Free eBooks</option>
                    <option value='paid-ebooks'>Paid eBooks</option>
                    <option value='ebooks'>All eBooks</option>
                </select>
            </div>
            <button>SEARCH!</button>
        </form>
    )
}

export default Search;