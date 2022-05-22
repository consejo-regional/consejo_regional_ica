import React from 'react';

import {GoogleMap,withScriptjs,withGoogleMap} from 'react-google-maps'

const Mapa=(props)=>{
    return(
        <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat:-34.39,lng:150.644}}
        />

    )
}

export default withScriptjs(
    withGoogleMap(
        Mapa
    )
)
