import React, { useState } from 'react';
import MapGl, { Marker, Popup } from 'react-map-gl';
import NavBar from './NavBar'
import Pop from './Popup'
import RoomIcon from '@material-ui/icons/Room.js';
import * as truckData from './TruckData.json'

const MAP_TOKEN = '' //ente API token here

export default function Map() {

    const [viewPort, setViewPort] = useState({
        latitude: 40.440624,
        longitude: -79.995888,
        zoom: 13,
        width: window.innerWidth,
        height: window.innerHeight,
    });

    return (
        <div>
            <NavBar />
            <MapGl 
                width="100vw"
                {...viewPort}
                mapStyle="mapbox://styles/mapbox/streets-v8"
                onViewportChange={setViewPort}
                mapboxApiAccessToken={MAP_TOKEN}>
                <div>
                    {truckData.trucks.map((truckData, index) => (
                        <Marker key={index}
                            latitude={truckData.lat} 
                            longitude={truckData.long} 
                            offset={(-viewPort.zoom * 3) / 2} 
                            offsetTop={-5}>
                                <RoomIcon>
                                </RoomIcon>
                                {/* <Pop>
                                    <p>{truckData.truckName}</p>
                                </Pop> */}
                        </Marker>
                    ))}
                </div>
            </MapGl>
        </div>
    )
}
