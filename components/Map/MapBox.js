import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import getCenter from "geolib/es/getCenter";


import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const MapBox = ({ data }) => {
  

  // transform the longtitude and latitude into an array
  const longWidthData = data.map((item) => {
    return { latitude: item.lat, longitude: item.long };
  });

  // get the center of all the coordinate
  const center = getCenter(longWidthData);

  //console.log("Center: ", center);

  //console.log("Data: ", typeof data);

  return (
    <MapContainer
      center={[center.latitude, center.longitude]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data?.map((res, idx) => {
        //console.log("Res Lat: ", res.lat);
        //console.log("Res long: ", res.long);

        return (
          <div key={idx}>
            <Marker position={[res.lat, res.long]}>
              <Popup position={[res.lat, res.long]}>
                {res.title}
              </Popup>
            </Marker>
          </div>
        );
      })}
    </MapContainer>
  );
};

export default MapBox;

/*
//console.log("Res lat: ", res.lat);
        const resLat = center.latitude;
        const resLong = center.longitude;
        return (
          <div key={idx}>
            <Marker position={[resLat, resLong]}></Marker>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </div>
        );
*/
