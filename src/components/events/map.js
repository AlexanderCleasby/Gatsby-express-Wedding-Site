import React from 'react'
import GoogleMapReact from 'google-map-react'



const map = ({coords})=>{
    console.log(coords)
    return <div style={{width:'100%',height:'200px'}}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDE2wpmIC0a_Ti0L1G4LedP6C3jckIAw7I' }}
            defaultCenter={coords}
            defaultZoom={18}
            options={{
                disableDefaultUI: true,
                gestureHandling: 'none',
                zoomControl: false
            }}
            yesIWantToUseGoogleMapApiInternals
        >

        </GoogleMapReact>
        </div>
}

export default map

