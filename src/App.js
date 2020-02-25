import React from 'react';
import './App.css';
import Search from './search';
import Results from './results';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      bookType: '',
      printType: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }

  formatParams(params) {
    const items = Object.keys(params).map(key =>
      `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    console.log(items.join('&'))
  }

  componentDidMount(){
    const apiUrl = 'https://www.googleapis.com/books/v1/volumes'
    const apiKey = 'AIzaSyAiEW9FLUJjhCIDFzA6_ystVJ-cjl7xbjs'
    const params = {
      q: this.state.searchTerm,
      filter: this.state.bookType,
      printType: this.state.printType
    }
    console.log(params)
    
    const queryString = this.formatParams(params);
    const url = apiUrl + queryString + apiKey;
    

    fetch(url)
      .then()
      .then()
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render (){
    return (
      <div className="App">
        <header>Google Book Search</header>
        <Search 
          handleChange={this.handleChange}
          data={this.state}
        />
        <Results />
        <div>
          <p>{this.state.searchTerm}</p>
          <p>{this.state.bookType}</p>
          <p>{this.state.printType}</p>
        </div>
      </div>
    );
  }
}

export default App;
