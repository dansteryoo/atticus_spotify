import React from "react";

function Artists({ artist, selectArtist }) {

    return (
        <>
            <li className="artists-li" onClick={() => selectArtist(artist.title)}>
                <img src={artist.img} alt={artist.name}/>
                <h4>{artist.name}</h4>
                <p>{artist.title}</p>
            </li>
        </>
    );
}

export default Artists;
