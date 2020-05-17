import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {
    createLeafletElement() {
        const { map } = this.props;
        let leafletElement = L.Routing.control({
            waypoints: [
                L.latLng(-22.560159, -44.956955),
                // L.latLng(-22.559525, -44.957189),
                // L.latLng(-22.560179, -44.959566),
                L.latLng(-22.558614, -44.960214)
            ],
            // waypointMode: 'connect',
            lineOptions: {
                styles: [
                    {
                        color: "blue",
                        opacity: 0.6,
                        weight: 4
                    }
                ]
            },
            // addWaypoints: false,
            // draggableWaypoints: false,
            // fitSelectedRoutes: true,
            // showAlternatives: true
        }).addTo(map.leafletElement);
        // leafletElement.getRouter().route(leafletElement.getWaypoints(), (err) => {
        //     console.log(`route error: ${err.message}`);
        // })
        return leafletElement.getPlan();
    }
}
export default withLeaflet(Routing);