import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyA503tPcAwcMlty2CQbze2DW7b9syIkJFQ';

class App extends Component {
  constructor(props) {
    super(props);

  this.state = { videos:[] };

YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
  this.setState({ videos });
  });
}

render() {
  return (
    <div>
      <SearchBar />
    </div>
    );
  }
}

// Take this component's generated HTML and puts it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
