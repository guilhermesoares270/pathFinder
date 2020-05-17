import React from "react";
import { Map, TileLayer, Polyline } from "react-leaflet";
// import L, { Icon, Routing, latLng } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";
import * as parkData from '../data/skateboard-parks.json';
import '../App.css';
import Routing from "./RoutingMachine";

const polylinePoints = [
    [-22.560159, -44.956955],
    [-22.559525, -44.957189],
    [-22.560179, -44.959566],
    [-22.558614, -44.960214]
];

const newPoly = [
    [-22.555293, -44.960046], [-22.556462, -44.960896],
]

// class LeafLetMap extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             lat: '-22.561560',
//             lng: '-44.959141',
//             zoom: 16,
//             isMapInit: false
//         };
//     }

//     saveMap = map => {
//         this.map = map;
//         this.setState({
//             isMapInit: true
//         });
//     };

//     render() {
//         const { lat, lng, zoom } = this.state;
//         const position = [lat, lng];

//         return (
//             <Map center={[-22.561560, -44.959141]} zoom={16} ref={this.saveMap}>
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 />
//                 {this.state.isMapInit && <Routing map={this.map} />}
//             </Map>
//         );
//     }
// }

export function LeafLetMap(props) {
    return (
        <Map center={[-22.561560, -44.959141]} zoom={16}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* <Polyline color="lime" positions={newPoly} /> */}
            <Polyline color="lime" positions={props.coords} />
        </Map>
    );
}

export default LeafLetMap;
