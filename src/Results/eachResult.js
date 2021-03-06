import React from 'react';
import './eachResult.css';
// import ExpandResult from './ExpandResult';

class EachResult extends React.Component{
    state = {
        expand: false
    }
    
    filterPrice(price){
        if(!price){
            return 'Price is not available'
        } else if(price.listPrice) {
            return 'Price: ' + price.listPrice.amount + ' ' + price.listPrice.currencyCode
        } else if (price.saleability.toUpperCase() === 'FREE') {
            return 'Price: ' + price.saleability
        } else if (price.saleability.toUpperCase() === 'NOT_FOR_SALE') {
            return 'Currently unavailable for sale.'
        } else {
            return 'Pricing not known'
        }
    }

    readMoreBtn = () => {
        this.setState({
          expand: !this.state.expand
        })
    }
    
    render (){
        const maxLength = 180;
        return(
            <div id='each-result-box'>
                <h3  className='child' id='title'>{this.props.title}</h3>
                <img  id='book-image' src={this.props.image} alt='book image' />
                <p className='details child' id='author'>Author: {this.props.author ? this.props.author :  <i> Author Not Available</i>}</p>
                <p className='details child'>
                    {this.filterPrice(this.props.price)} </p>
                    
                <div className='details child' id='description'>
                    {!this.props.description ? <i>Description Not Available</i> 
                        : this.state.expand === false ? 
                            [this.props.description.substring(0, maxLength) + ' ...']
                            : this.props.description
                    }
                </div> 
                <button 
                    id='read-more-btn' 
                    className='details child'
                    onClick={this.readMoreBtn}
                >
                    {this.state.expand ? 'Read Less' : 'Read More'}
                </button>
            </div>  
        )
    }
}

export default EachResult;
