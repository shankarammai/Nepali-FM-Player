import React from 'react'
import { SkipPreviousOutlined, SkipNextOutlined, PlayCircleOutlined, StopCircleOutlined } from '@mui/icons-material';
import { Avatar, Grid, Fab, Slider} from '@mui/material';


export default function FooterPlayer(props) {
  const StopOrPlay = (props.isPlaying) ?
    <>
      <Grid item xs={2} md={2}>
        <Fab color="primary" aria-label="stop" onClick={props.onStop}>
          <StopCircleOutlined />
        </Fab>
      </Grid>
    </> :
    <>
      <Grid item xs={2} md={2}>
        <Fab color="primary" aria-label="resume" onClick={props.onResume}>
          <PlayCircleOutlined />
        </Fab>
      </Grid>
    </>;

  return (
    <>
      <footer style={{ position: "fixed", background: "brown", bottom: 0, alignItems: "center", justifyItems: "center", paddingLeft: "20px", paddingTop: "5px", paddingButtom: "-10px", width: "100%" }}>
        <Grid container>

          <Grid item xs={3} md={3}>
            <Grid item xs={1} md={3}>
              <Avatar alt={props.currentPlaying.name} src={props.currentPlaying.image} />
            </Grid>
            <p>{props.currentPlaying.name}</p>
          </Grid>
          <Grid item xs={2} md={2}>
            <Fab color="primary" aria-label="previous" onClick={props.onPrevious}>
              <SkipPreviousOutlined />
            </Fab>
          </Grid>
          {StopOrPlay}
          <Grid item xs={2} md={2}>
            <Fab color="primary" aria-label="next" onClick={props.onNext}>
              <SkipNextOutlined />
            </Fab>
          </Grid>
          <Grid item xs={2} md={2} style={{ paddingTop: "20px" }}>
            <Slider aria-label="Volume" value={props.volume * 100} max={100} onChange={props.volumeSet} />
          </Grid>
          <Grid item xs={2} md={2}>
            <audio src={props.currentPlaying.url} autoPlay ref={props.audioElement} />
          </Grid>
        </Grid>
      </footer>
    </>
  )
}
