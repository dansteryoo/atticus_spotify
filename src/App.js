import React from 'react';
import Body from './components/mainPage/Body'
import './App.css';


const artists = [
  {
    id: 1,
    img: `https://homepages.cae.wisc.edu/~ece533/images/airplane.png`,
    name: `Airplane`,
    title: `Flying In The Sky`,
    songs: [{
      id: 1,
      album: `Flying In The Sky`,
      artist: `Airplane`,
      name: `Track 01`
    },
    {
      id: 2,
      album: `Flying In The Sky`,
      artist: `Airplane`,
      name: `Track 02`
    },
    {
      id: 3,
      album: `Flying In The Sky`,
      artist: `Airplane`,
      name: `Track 03`
    },
    {
      id: 4,
      album: `Flying In The Sky`,
      artist: `Airplane`,
      name: `Track 04`
    }]
  },
  {
    id: 2,
    img: `https://homepages.cae.wisc.edu/~ece533/images/arctichare.png`,
    name: `Rabbit`,
    title: `Cold Winters`,
    songs: [{
      id: 1,
      album: `Cold Winters`,
      artist: `Rabbit`,
      name: `Track 01`
    },
    {
      id: 2,
      album: `Cold Winters`,
      artist: `Rabbit`,
      name: `Track 02`
    },
    {
      id: 3,
      album: `Cold Winters`,
      artist: `Rabbit`,
      name: `Track 03`
    },
    {
      id: 4,
      album: `Cold Winters`,
      artist: `Rabbit`,
      name: `Track 04`
    }]
  },
  {
    id: 3,
    img: `https://homepages.cae.wisc.edu/~ece533/images/boat.png`,
    name: `Boats`,
    title: `Black and White`,
    songs: [{
      id: 1,
      album: `Black and White`,
      artist: `Boats`,
      name: `Track 01`
    },
    {
      id: 2,
      album: `Black and White`,
      artist: `Boats`,
      name: `Track 02`
    },
    {
      id: 3,
      album: `Black and White`,
      artist: `Boats`,
      name: `Track 03`
    },
    {
      id: 4,
      album: `Black and White`,
      artist: `Boats`,
      name: `Track 04`
    }]
  },
  {
    id: 4,
    img: `https://homepages.cae.wisc.edu/~ece533/images/cat.png`,
    name: `Cats`,
    title: `Cute Kittens`,
    songs: [{
      id: 1,
      album: `Cute Kittens`,
      artist: `Cats`,
      name: `Track 01`
    },
    {
      id: 2,
      album: `Cute Kittens`,
      artist: `Cats`,
      name: `Track 02`
    },
    {
      id: 3,
      album: `Cute Kittens`,
      artist: `Cats`,
      name: `Track 03`
    },
    {
      id: 4,
      album: `Cute Kittens`,
      artist: `Cats`,
      name: `Track 04`
    }]
  },
]


const playlists = [
  {
    id: 1,
    name: `Tracks 01`,
    list: [{
      id: 1,
      album: `Cute Kittens`,
      artist: `Cats`,
      name: `Track 01`
    },
    {
      id: 2,
      album: `Flying In The Sky`,
      artist: `Airplane`,
      name: `Track 01`
    },
    {
      id: 3,
      album: `Black and White`,
      artist: `Boats`,
      name: `Track 01`
    },
    {
      id: 4,
      album: `Cold Winters`,
      artist: `Rabbit`,
      name: `Track 01`
    }]
  },
  {
    id: 2,
    name: `Tracks 02`, 
    list: [{
      id: 1,
      album: `Cute Kittens`,
      artist: `Cats`,
      name: `Track 02`
    },
    {
      id: 2,
      album: `Flying In The Sky`,
      artist: `Airplane`,
      name: `Track 02`
    },
    {
      id: 3,
      album: `Black and White`,
      artist: `Boats`,
      name: `Track 02`
    },
    {
      id: 4,
      album: `Cold Winters`,
      artist: `Rabbit`,
      name: `Track 02`
    }]
  },
  {
    id: 3,
    name: `Tracks 03`,
    list: [{
      id: 1,
      album: `Cute Kittens`,
      artist: `Cats`,
      name: `Track 03`
    },
    {
      id: 2,
      album: `Flying In The Sky`,
      artist: `Airplane`,
      name: `Track 03`
    },
    {
      id: 3,
      album: `Black and White`,
      artist: `Boats`,
      name: `Track 03`
    },
    {
      id: 4,
      album: `Cold Winters`,
      artist: `Rabbit`,
      name: `Track 03`
    }]
  },
  {
    id: 4,
    name: `Tracks 04`,
    list: [{
      id: 1,
      album: `Cute Kittens`,
      artist: `Cats`,
      name: `Track 04`
    },
    {
      id: 2,
      album: `Flying In The Sky`,
      artist: `Airplane`,
      name: `Track 04`
    },
    {
      id: 3,
      album: `Black and White`,
      artist: `Boats`,
      name: `Track 04`
    },
    {
      id: 4,
      album: `Cold Winters`,
      artist: `Rabbit`,
      name: `Track 04`
    }]
  },
]

function App() {

  return (
    <div className="App">
      <h1>Atticus Spotify</h1>
      <div className="App-container"> 
        <Body artistsData={artists} playlistData={playlists}/>
      </div>
    </div>
  );
}

export default App;
