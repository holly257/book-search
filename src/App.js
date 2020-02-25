import React from 'react';
import './App.css';
import Search from './search';
import Results from './results';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  componentDidMount(){
    // api call
  }

  render (){
    return (
      <div className="App">
        <header>Google Book Search</header>
        <Search />
        <Results />
      </div>
    );
  }
}

export default App;
