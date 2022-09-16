import { Stack} from '@mui/material';
import FmItem from './components/FmItem';
import SearchAppBar from './components/SearchBar';
import fmdata from './fmdata';
import React, { useRef,useState } from 'react';
import FooterPlayer from './components/FooterPlayer';



function App() {
  const [fminfo, setfminfo] = useState(fmdata);
  const [searchValue, setSearchValue] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaying, setCurrentPlaying] = useState(fminfo[2]);
  let  [currentPlayingIndex, setCurrentPlayingIndex] = useState(2);
  const [volume, setVolume] = useState(50);
  

  const audioElement = useRef();

  //Play the FM on clicked
  const playthisFM = (index) => {
    setCurrentPlaying(fminfo[index]);
    setCurrentPlayingIndex(index);
    audioElement.current.play();
    setIsPlaying(true);
  }

//Resume the currently playing FM
  const resumeFM = () => {
    setIsPlaying(true);
    audioElement.current.play();
    console.log('Resume');
  }

  //Play next FM 
  const playNext = () => {
    console.log('playNext');
    let nextPlayIndex = currentPlayingIndex + 1;
    (nextPlayIndex < fminfo.length-1) ? setCurrentPlayingIndex(nextPlayIndex) : setCurrentPlayingIndex(0)
    setCurrentPlaying(fminfo[currentPlayingIndex]);
  }
//Play Previous Document
  const playPrevious = () => {
    console.log('PlayPrevious');
    if (currentPlayingIndex == 0) {
      setCurrentPlayingIndex(fminfo.length-1);
    }
    else { 
    let previousToPlayIndex = currentPlayingIndex -1;
      setCurrentPlayingIndex(previousToPlayIndex);
    }
          setCurrentPlaying(fminfo[currentPlayingIndex]);
  }
// Stop currently playing FM
  const stopFM = () => {
    setIsPlaying(false);
    audioElement.current.pause();
    console.log('StopFM');
  }

//On Volumne change
  const setAudioVolume = (event) => { 
    setVolume((event.target.value)/100);
    audioElement.current.volume = event.target.value / 100;
  }

//When some fm is searched using SearchBar
  const searchValueChanged = (event) => {
    setSearchValue(event.target.value);
    if (event.target.value.length > 0) {
      setfminfo([fminfo[0]]);
      //filter fm with the searched name
      setfminfo(fminfo.filter(item => {
        return item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0;
      }));
    }
    else {
      setfminfo(fmdata);
    }
  }
  return (
    <>
      <SearchAppBar onNewValue={searchValueChanged} ></SearchAppBar>
      <div style={{paddingButtom: "20px"}}>
      <Stack spacing={2}>
        {
          fminfo.map((item, index) => {
            return <FmItem key={ index} currentPlayingfmName={currentPlaying.name} fmName={item.name} isPlaying={isPlaying} name={item.name} source={item.url}
              country={item.country} imagesrc={item.image} city={item.city} onStop={stopFM} handelPlay={() => playthisFM(index)}></FmItem>
          })
        }
        </Stack>
        </div>
      <FooterPlayer currentPlaying={currentPlaying} isPlaying={isPlaying} onResume={resumeFM} onNext={playNext} onPrevious={playPrevious} onStop={stopFM} audioElement={audioElement} volumeSet={setAudioVolume} volume={volume}></FooterPlayer>
    </>

  );
}

export default App;
