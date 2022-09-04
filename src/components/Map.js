import React from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
// import '../Result.css';

export default function Map(props) {


    // const center = { lat: 24.6199, lng: 73.8901 };
    const api = "AIzaSyAnR0YMqnp1Y0H7lom9qgFeg8PoJkMvL-M";

    const { isLoaded } = useJsApiLoader({ googleMapsApiKey: api });
    if (!isLoaded) {
        console.log("api is not loaded");
    }
    else {
        console.log("api is not loaded");
    }
    const calculateRoute = () => {

        let convertStartIntoObject = JSON.parse(props.start);
        let converDestinationIntoObject = JSON.parse(props.destination);

        //eslint-disable-next-line no-undef 
        const options = { zoom: 12, scaleControl: true, center: convertStartIntoObject };
        //eslint-disable-next-line no-undef 
        const map = new google.maps.Map(document.getElementById("map"), options);
        //eslint-disable-next-line no-undef 
        new google.maps.Marker({ position: convertStartIntoObject, map: map });
        //eslint-disable-next-line no-undef 
        new google.maps.Marker({ position: converDestinationIntoObject, map: map });
        //eslint-disable-next-line no-undef 
        new google.maps.Polyline({ path: [convertStartIntoObject, converDestinationIntoObject], map: map })


        let lat1 = convertStartIntoObject.lat;
        let lng1 = convertStartIntoObject.lng;
        let lat2 = converDestinationIntoObject.lat;
        let lng2 = converDestinationIntoObject.lng;
        const R = 6371.0710  //Radius of the Earth in km 

        let rlat1 = lat1 * (Math.PI / 180); //lat1 convert in rad  
        let rlat2 = lat2 * (Math.PI / 180); //lat2 convert in rad
        let diffLat = (rlat2-rlat1) //diff bet lat in radiance

        let diffLng = (lng2 - lng1) * (Math.PI / 180); // diff bet long  in rad

        //haversine formula to calculate distance between to point
        let result = 2 * R * Math.asin(Math.sqrt(Math.sin(diffLat / 2) * Math.sin(diffLat / 2) + 
        Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(diffLng / 2) * Math.sin(diffLng / 2)));
        props.setDistance(Math.ceil(result));
    }

    return (
        <>
            <div id='btn'>
                <div style={{ position: "absolute", top: "225px", left: "10px" }} className="d-grid gap-1 col-2  ">
                    <button className="btn btn-dark" type="button" onClick={calculateRoute}>Submit</button>
                </div>
            </div>
            <div id='map' key={1} style={{ height: "100vh", width: "100vw", position: "absolute", left: "0", top: "0", zIndex: "-1" }} className="container-fluid">
            </div>
        </>
    )
}
