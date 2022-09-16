import * as React from 'react';
import { List, ListItem, Divider, ListItemAvatar, Avatar, Typography, ListItemText, IconButton } from '@mui/material/';
import { PlayCircleOutlined, StopCircleOutlined } from '@mui/icons-material';


export default function AlignItemsList(props) {

    const PlayingText = (props.currentPlayingfmName == props.fmName) ? <><div style={{paddingRight: "30px"}}> <Avatar alt="Playing" src="/playing.gif"/></div></> : "";
    const PlayOrStop = (props.isPlaying && props.currentPlayingfmName == props.fmName) ? <>
        <IconButton edge="start" aria-label="stop" onClick={props.onStop}>
            <StopCircleOutlined />
        </IconButton>
    </>
        :
        <IconButton edge="start" aria-label="play" onClick={props.handelPlay}>
            <PlayCircleOutlined />
        </IconButton>


    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start" style={{ cursor: "pointer" }} onClick={props.handelPlay}>
                <ListItemAvatar>
                    <Avatar alt={props.name} src={props.imagesrc} />
                </ListItemAvatar>
                <ListItemText
                    primary={props.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary">
                                {props.country}
                            </Typography>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary">
                                {" - "}{props.city}
                            </Typography>
                        </React.Fragment>
                    } />
{PlayingText}
               {PlayOrStop}

            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
}
