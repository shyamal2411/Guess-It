import React from 'react'
import Header from '../Header/Header'
import './App.css'
import ResultsContainer from '../ResultsContainer/ResultsContainer'
import SearchBox from '../SearchBox/SearchBox';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {

    constructor() {
      super();

      this.state = {
      headerText:'Guess it!',
      headerExpanded: true
    };
  }

      handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };

 render() {
        return (
            <div className="app-container">
                <Header expandedHeader={this.state.expandedHeader} />
                <SearchBox onInputChange={this.handleSearch} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}


export default App;