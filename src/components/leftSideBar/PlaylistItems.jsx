import React from "react";

function PlaylistItems({ playlist, selectPlaylist }) {

    return (
        <>
            <li className="playlist-row" onClick={() => selectPlaylist(playlist.id)}>
                <span>{playlist.name}</span>
            </li>
        </>
    );
}

export default PlaylistItems;
