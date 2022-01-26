// NOT FUNCTIONING DON'T EVEN LOOK AT IT
// IT MIGHT BE DANGEROUS

import React from 'react';
import Popup from 'react-map-gl';
import { Typography } from '@mui/material/Typography';
import * as truckData from './TruckData.json';


export default function Pop() {
    
    //const [truckData, setTogglePopup] = React.useState(false);
    
    return (
        <>
            {truckData.trucks.map((truckData, index) => (
                <Popup key={index}
                    truckName={truckData.truckName}
                    truckLocation={truckData.truckLocation}>
                        <Typography>{truckData.truckName}</Typography>                        
                </Popup>
            ))}
        </>

    )
}




// {truckData && (<Pop 
//     anchor="top"
//     longitude={truckData.long}
//     latitude={truckData.lat}
//     closeOnClick={false}
//     onClose={setTogglePopup}>
//     <div>
//         {truckData.truckName}
//         {truckData.location}
//     </div>
// </Pop>)}