import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import styled from "styled-components";
// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'

export const Map = () => {
  return (
    <MapContainer
      //   center={[51.505, -0.09]}
      center={[9.627047752811073, 123.80584724143716]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[9.627047752811073, 123.80584724143716]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

const T = styled(MapContainer)`
  height: 300px;
  width: 500px;
`;
