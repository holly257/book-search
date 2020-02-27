import React from 'react';
import './search.css';

function Search(props){
    return(
        <form>
            <div className='search-element'>
                <label className='search-box' htmlFor='search'>Search: &nbsp;&nbsp;</label>
                <input
                    type='text'
                    name='searchTerm'
                    id='search'
                    placeholder='flowers'
                    onChange={props.handleChange}
                    value={props.data.searchTerm}
                >
                </input>
            </div>

            <div className='search-element'>
                <label htmlFor='print-type'>Print Type: &nbsp;</label>
                <select 
                    className='dropdown'
                    id='print-type'
                    value={props.data.printType}
                    name='printType'
                    onChange={props.handleChange}
                >
                    <option value='all'>All</option>
                    <option value='books'>Books Only</option>
                    <option value='magazines'>Magazines Only</option>
                </select>
            </div>

            <div className='search-element'>
                <label htmlFor='book-type'>Book Type: &nbsp;</label>
                <select 
                    id='book-type'
                    className='dropdown'
                    value={props.data.bookType}
                    name='bookType'
                    onChange={props.handleChange}
                >
                    <option value='partial'>Partial text</option>
                    <option value='full'>Full text</option>
                    <option value='free-ebooks'>Free eBooks</option>
                    <option value='paid-ebooks'>Paid eBooks</option>
                    <option value='ebooks'>All eBooks</option>
                </select>
            </div>
            
            <div id='btn-div'>
                <button
                    className='search-element'
                    id='search-button'
                    onClick={(event) => {
                        event.preventDefault()
                        props.handleSubmit()
                    }
                    }
                >
                    SEARCH!
                </button>
            </div>
            
        </form>
    )
}

export default Search;