// NOT FUNCTIONING DON'T EVEN LOOK AT IT
// IT MIGHT BE DANGEROUS

import React from 'react'
import RoomIcon from '@material-ui/icons/Room.js';
import * as truckData from './TruckData.json'

export default function Marker() {
    return (
        <div>
            {truckData.trucks.map((truckData, index) => (
                        <Marker key={index}
                            latitude={truckData.lat} 
                            longitude={truckData.long}
                            truckName={truckData.truckName} 
                            offset={(-viewPort.zoom * 3) / 2} 
                            offsetTop={-5}>
                                <RoomIcon>
                                {/* <Popup>
                                    <h1>{truckData.truckName}</h1>
                                </Popup> */}
                                </RoomIcon>
                                
                        </Marker>
                    ))}
        </div>
    )
}
