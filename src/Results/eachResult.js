import React from 'react';
import './eachResult.css';
import ExpandResult from './ExpandResult';

function EachResult(props){
    
    console.log(props)
    const maxLength = 180;
    return(
        <div id='each-result-box'>
            <h3  className='child' id='title'>{props.title}</h3>
            <img  id='book-image' src={props.image} alt='book image' />
            <p className='details child' id='author'>Author: {props.author ? props.author : 'author not available'}</p>
            <p className='details child'>Price: ${props.price ? 
                props.price.amount : props.price.saleability} </p>
            <div className='details child' id='description'>
                {!props.description ? 'description not available' 
                    : props.description.length > maxLength ? 
                        [props.description.substring(0, maxLength) + ' ...']
                        : props.description
                }
            </div> 
            <button className='details child'>Read More</button>
        </div>  
    )
}

export default EachResult;