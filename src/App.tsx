import React, {Component} from 'react';
import { Grid } from "@material-ui/core";

import {SearchBar, VideoDescription, VideoList} from './components';
import youtube from './api/youtubeApi';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

componentDidMount() {
  this.handleSubmit('rap instrumentals');
}


  handleSubmit = async (searchTerm: any) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyBIKDEpznsEtfFTO4ciWL1B10RTaOfPQ5k',
        q: searchTerm,
      }});
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
      });
  }

  onVideoSelect = (video: any) => {
    this.setState({
      selectedVideo: video
    })
  }

  render() {
    const {videos, selectedVideo} = this.state;
    return (
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              <VideoDescription video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
