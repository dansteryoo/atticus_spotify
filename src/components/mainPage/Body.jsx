import React, {useState, useEffect} from "react";
import Artists from "./Artists";
import Songs from "./Songs";
import Playlist from "../leftSideBar/Playlist";


function Body({artistsData, playlistData}) {

    const [artists, setArtists] = useState([])
    const [songs, setSongs] = useState([])
    const [playlist, setPlaylist] = useState([])

    useEffect(() => {
        setArtists(artistsData)
        setPlaylist(playlistData)
    }, [])

    const selectPlaylist = (playlistId) => {
        playlist.forEach(each => {
            if (each.id === playlistId) return setSongs(each.list)
        })
    }

    const selectArtist = (artistTitle) => {
        artistsData.forEach(artist => {
            if (artist.title === artistTitle) {
                setSongs(artist.songs)
            }
        })
    }

    const playSong = (songAlbum, songId) => {
        alert(`fetchSong => Album: ${songAlbum}, Track: ${parseInt(songId)}`,)
    }

    return (
        <>
        <div className="playlist-container"> 
            <Playlist playlist={playlist} selectPlaylist={selectPlaylist} />
        </div>
        <div className="songs-container">
            <h1>My Artists</h1>
        <div>
            <ul className="artists-container">
                {artists.map(artist => (
                    <Artists key={artist.id} artist={artist} selectArtist={selectArtist}/>
                ))}
            </ul> 
        </div>
        <div>
            <ul className="artists-container">
                {songs.map(song => (
                    <Songs key={song.id} song={song} playSong={playSong}/>
                ))}
            </ul>
        </div>
        </div>
        </>
        );
    }
    
    export default Body;
