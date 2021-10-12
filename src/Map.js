import React, { useState } from 'react'
import MapGl from 'react-map-gl'

const MAP_TOKEN = 'pk.eyJ1IjoiY29ybWFjZ2FydGxhbmQiLCJhIjoiY2t1ZjBxYTk5MXB2aDJ1bzhvOXA4dHAybyJ9.-_ZlY_g0JfjDIMiJmQomeA'

export default function Map() {

    const [viewPort, setViewPort] = useState({
        latitude: 40.440624,
        longitude: -79.995888,
        zoom: 13,
    });

    return (
        <div>
            <MapGl 
                {...viewPort}
                width="100vw"
                height="100vh"
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={setViewPort}
                mapboxApiAccessToken={MAP_TOKEN}
            />
        </div>
    )
}
