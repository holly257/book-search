import React from 'react';
import './eachResult.css';

function EachResult(props){
    console.log(props)

    return(
        <div id='each-result-box'>
            <h3 id='title'>{props.title}</h3>
            <img id='book-image' src={props.image} alt='book image' />
            <p className='details' id='author'>Author: {props.author ? props.author : 'author not available'}</p>
            <p className='details'>Price: ${props.price ? 
                props.price.amount : props.price.saleability} </p>
            <p className='details' id='description'>{props.description ? props.description : 'description not available'}</p>
            
        </div>
        
    )
}

export default EachResult;