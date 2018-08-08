import React, { Component } from 'react';

class SearchBar extends React.Component {  // this gives our class the functionality of the react.component class
  render() {
    return <input  onChange={event => console.log(event.target.value)} />;
  }

}

export default SearchBar;
