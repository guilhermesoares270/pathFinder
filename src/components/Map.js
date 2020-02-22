import React from "react";
import { Map, Marker, Popup, TileLayer, Polyline, LatLng } from "react-leaflet";
import { Icon } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";
import * as parkData from '../data/skateboard-parks.json';
import '../App.css';

const polylinePoints = [
    [-22.560159, -44.956955],
    [-22.559525, -44.957189],
    [-22.560179, -44.959566],
    [-22.558614, -44.960214]
];

export default function LeafLetMap() {
    return (
        <Map center={[-22.561560, -44.959141]} zoom={16}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Polyline color="lime" positions={polylinePoints} />
        </Map>
    );
}