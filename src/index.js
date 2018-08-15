import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyA503tPcAwcMlty2CQbze2DW7b9syIkJFQ';

class App extends Component {
  constructor(props) {
    super(props);

  this.state = {
    videos:[],
    selectedVideo: null
  };

  YTSearch({key: API_KEY, term: 'sharks'}, (videos) => {
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    });
  });
}

render() {
  return (
    <div>
      <SearchBar />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
    </div>
    
    );
  }
}

// Take this component's generated HTML and puts it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
