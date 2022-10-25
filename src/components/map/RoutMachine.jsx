import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";

const createRoutineMachineLayer = ({ point }) => {
    const instance = L.Routing.control({
        waypoints: [
            L.latLng(47.22207641601563, 39.7203483581543),
            L.latLng(47.224224253187494, 39.72046852111817),
        ],
        lineOptions: {
            styles: [{ color: "black", weight: 4 }],
        },
        show: false,
        addWaypoints: false,
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        showAlternatives: false,
    });

    return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
