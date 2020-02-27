import React from 'react';
import './App.css';
import Search from './search';
import Results from './results';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: 'flowers',
      bookType: 'paid-ebooks',
      printType: 'all',
      searchData: [],
      error: null
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

  // componentDidMount(){
  //   this.executeSearch()
  // }

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
    
    const queryString = this.formatParams(params);
    const url = apiUrl + '?' + queryString + '&key=' + apiKey;

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Sorry, something went wrong...')
        } return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          searchData: data.items
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      })
  }

  render (){
    const returnErrorOrResults = this.state.error
      ? <div className='app_error'>{this.state.error}</div>
      : <Results searchData={this.state.searchData}/>;

    // const showResults = ? {error} : <Results searchData={this.state.searchData}/>
    return (
      <div className="App">
        <header>Google Book Search</header>
        <Search 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state}
        />
        {returnErrorOrResults}
      </div>
    );
  }
}

export default App;