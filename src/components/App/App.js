import React from 'react'
import Header from '../Header/Header'
import './App.css'
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
<div>
  <Header
   headerExpanded={this.state.headerExpanded} 
   headTitle={this.state.headerText}/>    
  <SearchBox onInputChange={this.handleInputChange}/>
</div>
);
}
}


export default App;