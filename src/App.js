import React from 'react';
import './App.css';
import Search from './search';
import Results from './results';

class App extends React.Component {


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
