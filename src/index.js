import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAeClMa0kFWGTDRT8MaVVHIroUcGxPE7cM';

// Create a new component.  This component should produce
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and puts it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
