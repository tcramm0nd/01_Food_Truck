import React, { useState } from 'react';
import MapGl, { Marker, Popup } from 'react-map-gl';
import NavBar from './NavBar'
//import Popup from './Pop'
import RoomIcon from '@material-ui/icons/Room.js';
import * as truckData from './TruckData.json'
import { Typography } from '@material-ui/core';

const MAP_TOKEN = '' // API TOKEN 

export default function Map() {

    const [viewPort, setViewPort] = useState({
        latitude: 40.440624,
        longitude: -79.995888,
        zoom: 13,
        width: window.innerWidth,
        height: window.innerHeight,
    });
    

    const [popupInfo, setPopupInfo] = useState(null);

    return (
        <div>
            <NavBar />
            <MapGl 
                width="100vw"
                height="100vh"
                {...viewPort}
                mapStyle="mapbox://styles/mapbox/streets-v8"
                onViewportChange={setViewPort}
                mapboxApiAccessToken={MAP_TOKEN}>
                <div>
                    {truckData.trucks.map((truckData, index) => (
                        <Marker key={index}
                            latitude={truckData.lat} 
                            longitude={truckData.long}
                            truckName={truckData.truckName} 
                            offset={(-viewPort.zoom * 3) / 2} 
                            offsetTop={-5}>
                            <RoomIcon />                              
                        </Marker>
                    ))}
                </div>
            </MapGl>
        </div>
    )
}
