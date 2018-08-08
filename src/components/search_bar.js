import React, { Component } from 'react';

class SearchBar extends React.Component {  // this gives our class the functionality of the react.component class
  render() {
    return <input  onChange={this.onInputChange} />;
  }

  onInputChange(event) {  //Event Handler- whenever the input changes run teh code inside here
    console.log(event.target.value);
  }
}

export default SearchBar;
