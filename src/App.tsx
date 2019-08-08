import React from 'react';
import { Grid } from "@material-ui/core";

import {SearchBar, VideoDescription, VideoList} from './components';
import youtube from './api/youtubeApi';

const App: React.FC = () => {
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <SearchBar />
          </Grid>
          <Grid item xs={8}>
            <VideoDescription />
          </Grid>
          <Grid item xs={4}>
            <VideoList/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
