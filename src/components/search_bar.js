import React, { Component } from 'react';

class SearchBar extends Component {    // this gives our class the functionality of the react.component class
  constructor(props) {
    super(props);

    this.state = { term:'' };
  }
  render() {
    return (
      <div>
    <input
      value ={this.state.term}
      onChange={event => this.setState({ term: event.target.value })} />
    </div>
    );
  }

}

export default SearchBar;
