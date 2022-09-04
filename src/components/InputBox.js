import React from 'react';
import {useState} from 'react';
import Map from './Map'
// import Result from './Result';


export default function InputBox() {

    const [start, setStart] = useState();
    const [destination, setDestination] = useState();
    const [distance, setDistance] = useState();

    const handleStarting = (e) => {
        setStart(e.target.value);
    }

    const handleDestination = (e) => {
        setDestination(e.target.value);
    }

  return (
    <>

<div style={{ width: "50vw", backgroundColor: "gray", position: "absolute", top: "0", left: "10px", zIndex: "3" }} className="container mt-4" >
                <h4>Airport Distance Calculator</h4>
                <p style={{ margin: "0", padding: "0" }}>From</p>

                <select value={start} onChange={handleStarting} style={{ width: "45vw" }} className="form-select " aria-label=".form-select-lg example">
                    <option >Choose Starting point</option>
                    <option value={JSON.stringify({ lat: 24.6199, lng: 73.8901 })}>Udaipur Airport</option>
                    <option value={JSON.stringify({ lat: 26.8289, lng: 75.8056 })}>Jaipur Airport</option>
                    <option value={JSON.stringify({ lat: 28.5562, lng: 77.1000 })}>Delhi Airport</option>
                    <option value={JSON.stringify({ lat: 22.7281, lng: 75.8042 })}>Indore Airport</option>
                    <option value={JSON.stringify({ lat: 19.097403, lng: 72.874245 })}>Mumbai Airport</option>
                </select>

                <p style={{ margin: "0", padding: "0" }}>To</p>
                <select value={destination} onChange={handleDestination} style={{ width: "45vw" }} className="form-select" aria-label=".form-select-lg example">
                    <option >Choose destination</option>
                    <option value={JSON.stringify({ lat: 24.6199, lng: 73.8901 })}>Udaipur Airport</option>
                    <option value={JSON.stringify({ lat: 26.8289, lng: 75.8056 })}>Jaipur Airport</option>
                    <option value={JSON.stringify({ lat: 28.5562, lng: 77.1000 })}>Delhi Airport</option>
                    <option value={JSON.stringify({ lat: 22.7281, lng: 75.8042 })}>Indore Airport</option>
                    <option value={JSON.stringify({ lat: 19.097403, lng: 72.874245 })}>Mumbai Airport</option>
                </select>

                <h4>distance : {distance ?`${distance} km`: 0}</h4>
            </div>
            <Map start={start} destination={destination} setDistance={setDistance}/>
            
    </>
  )
}
