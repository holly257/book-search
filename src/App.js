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
      printType: '',
      title: '',
      author: '',
      price: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  formatParams(params) {
    const items = Object.keys(params).map(key =>
      `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    return items.join('&')
  }

  componentDidMount(){
    this.executeSearch()
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit() {
    this.executeSearch()
  }

  executeSearch() {
    const apiUrl = 'https://www.googleapis.com/books/v1/volumes'
    const apiKey = 'AIzaSyAiEW9FLUJjhCIDFzA6_ystVJ-cjl7xbjs'
    const params = {
      q: this.state.searchTerm,
      filter: this.state.bookType,
      printType: this.state.printType
    }
    console.log(params)
    
    // const queryString = this.formatParams(params);
    // const url = apiUrl + queryString + '&key=' + apiKey;
    // console.log(url)

    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data)
    //     // this.setState({
    //     //   title: '',
    //     //   author: '',
    //     //   price: '',
    //     //   description: ''
    //     // })
    //   })
  }

  render (){
    return (
      <div className="App">
        <header>Google Book Search</header>
        <Search 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
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
