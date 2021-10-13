import React, { useState } from 'react';
import MapGl, { Marker } from 'react-map-gl';
import RoomIcon from '@material-ui/icons/Room.js';
import * as truckData from './TruckData.json'

const MAP_TOKEN = 'pk.eyJ1IjoiY29ybWFjZ2FydGxhbmQiLCJhIjoiY2t1ZjBxYTk5MXB2aDJ1bzhvOXA4dHAybyJ9.-_ZlY_g0JfjDIMiJmQomeA'

export default function Map() {

    const [viewPort, setViewPort] = useState({
        latitude: 40.440624,
        longitude: -79.995888,
        zoom: 13,
        // width: window.innerWidth,
        height: window.innerHeight,
    });

    return (
        <div>
            <MapGl 
                width="75vw"
                {...viewPort}
                mapStyle="mapbox://styles/mapbox/streets-v8"
                onViewportChange={setViewPort}
                mapboxApiAccessToken={MAP_TOKEN}>
                <div>
                    {truckData.features.map((truckData, index) => (
                        <Marker key={index}
                            latitude={truckData.lat} 
                            longitude={truckData.long} 
                            offset={(-viewPort.zoom * 3) / 2} 
                            offsetTop={-5}>
                                <RoomIcon>
                                </RoomIcon>
                        </Marker>
                    ))}
                </div>
            </MapGl>
        </div>
    )
}
