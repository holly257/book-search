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

  // componentDidMount(){
  //   // api call
  // }

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
