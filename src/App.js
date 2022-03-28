import { useState } from 'react';
import './App.css';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import Navbar from './components/Navbar';
import Playing from './components/Playing';
import { Songs } from './Context'
import DataSongs from './data/songs.json'

function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handleIdSong = (id) => {
    const song = DataSongs.find(song => song.id === id)
    !song ? setSong(DataSongs[0]) : setSong(song)

  }

  return (
    <div className="App ">
      <Songs.Provider value={{ DataSongs, song, handleIdSong }}>
        <Navbar />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player text-neutral-400">
          <DetailSong />
          <ListSong />
        </div>
        <Playing />

      </Songs.Provider>
    </div>
  );
}

export default App;
