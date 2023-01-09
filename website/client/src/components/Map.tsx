import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-icon.png'

//Configuracion del Icono Marcador
const iconStyles = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,

    iconSize: [38, 60], // size of the icon
    shadowSize: [0, 0], // size of the shadow
    iconAnchor: [22, 59], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor: [-4, -66] // point from which the popup should open relative to the iconAnchor
});

const Map = () => {

    const [position, setPosition] = useState({
        longitude: 0,
        latitude: 0
    })

    // const position = GeolocationCoordinates.latitud)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                setPosition({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                })
            },
            error => { console.log(error) },
            { enableHighAccuracy: true }
        );

    }, [])

    return (
        <div className='map'>
            <MapContainer center={[36.5471215, -4.6346319]} zoom={14} scrollWheelZoom={false} className='map'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[36.5471215, -4.6346319]} icon={iconStyles}>
                    <Popup>
                        Crossfit La muralla. <br /> Join the family, get fit.
                    </Popup>
                </Marker>
                <Marker position={[position.latitude, position.longitude]} icon={iconStyles}>
                    <Popup>
                        Esta es tu ubicacion actual <br /> Estás cerca, ven a vernos
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map
