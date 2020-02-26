import React from 'react';

function EachResult(props){
    console.log(props)

    return(
        <div>
            <h3>{props.title}</h3>
            <img src={props.image} alt='book image' />
            <p>{props.author}</p>
            {/* <p>Price: ${props.price} </p> */}
            <p>{props.description}</p>
            <hr />
        </div>
        
    )
}

export default EachResult;