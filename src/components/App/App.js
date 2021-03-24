import React from 'react'
import Header from '../Header/Header'
import './App.css'
import SearchBox from '../SearchBox/SearchBox';

class App extends React.Component {

    constructor() {
      super();

      this.state = {
      headerText:'Guess it!',
    };
  }

  render() {
return (
<div>
  <Header headtitle={this.state.headerText}/>    
  <SearchBox/>
</div>
);
}
}


export default App;