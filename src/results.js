import React from 'react';
import EachResult from './eachResult';

function Results(props){
    return(
        <div>
            {props.searchData.map(item =>
                <EachResult
                    key={item.id}
                    title={item.volumeInfo.title}
                    image={item.volumeInfo.imageLinks.smallThumbnail}
                    author={item.volumeInfo.authors}
                    price={item.saleInfo.listPrice}
                    description={item.volumeInfo.description}
                /> 
            )}
        </div>
    )
}

export default Results;