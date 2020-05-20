import React from "react";
import { Map, TileLayer, Polyline } from "react-leaflet";
import '../App.css';

export function LeafLetMap(props) {
    return (
        <Map center={[-22.561560, -44.959141]} zoom={16}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {
                props.coords && <Polyline color="lime" positions={props.coords} />
            }
        </Map>
    );
}

export default LeafLetMap;
