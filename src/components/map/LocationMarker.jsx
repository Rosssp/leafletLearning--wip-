import React, { useRef } from "react";
import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

import styles from "./location.module.scss";

export default function LocationMarker() {
    const [position, setPosition] = useState(null);
    const myPos = useRef(null);

    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    return position === null ? null : (
        <>
            <div className={styles.MyPosWrapper}>
                <div className={styles.MyPosition} ref={myPos}>
                    <p>MyPos</p>
                </div>
                <Marker position={position}>
                    <Popup>You are here</Popup>
                </Marker>
            </div>
        </>
    );
}
