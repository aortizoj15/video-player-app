import React from 'react';
import {Grid} from '@material-ui/core';
import VideoItem from './VideoItem.component';

const VideoList: any = ({videos, onVideoSelect}: {videos: any, onVideoSelect: any}) => {
  const allVideos = videos.map((video: any, id: any) => {
    return <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>
});
  return (
    <Grid container spacing={2}>
      {allVideos}
    </Grid>
  );
}

export default VideoList;
