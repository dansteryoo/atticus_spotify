import React from "react";
import PlaylistItems from "./PlaylistItems";

function Playlist({ playlist, selectPlaylist }) {

    return (
        <div>
            <h1>My Playlist</h1>
            <br/>
            <ul>
                {playlist.map(each => (
                    <PlaylistItems key={each.id} playlist={each} selectPlaylist={selectPlaylist}/>
                ))}
            </ul>
        </div>
    );
}

export default Playlist;
