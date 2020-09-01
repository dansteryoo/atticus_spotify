import React from "react";

function Songs({song, playSong}) {

    return (
        <li className="song-row" onClick={() => playSong(song.album, song.id)}>
            <h3>{song.album}</h3>
            <h5>{song.name}</h5>
             <p>{song.artist}</p>
        </li>
    );
}

export default Songs;