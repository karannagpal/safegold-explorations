import { Geolocation } from "@capacitor/geolocation";
import { useEffect, useState } from "react";

import { GeolocationPosition } from "@/types";
import { getLocalDateTime } from "@/utils";

function CapLocation() {
  const [geoData, setGeoData] = useState<GeolocationPosition>();

  const getCurrentLocation = async () => {
    const capGeoData = await Geolocation.getCurrentPosition();
    console.log(Geolocation)
    setGeoData(capGeoData);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const geoStatus = "";
  return (
    <div className="border-2 border-blue-400 p-2 m-1">
      <h2>Location from capacitor</h2>
      GeoLocation supported by browser/device: <b>{geoData ? "Yes" : "No"}</b>
      <br />
      GeoLocation current status: <b>{geoStatus}</b>
      <br />
      <div className="p-2">
        GeoLocation Data:
        <br />
        latitude: <b>{geoData?.coords.latitude}</b>
        <br />
        longitude: <b>{geoData?.coords.longitude}</b>
        <br />
        accuracy: <b>{geoData?.coords.accuracy} meters</b>
        <br />
        time stamp: <b>{geoData && getLocalDateTime(geoData.timestamp)}</b>
      </div>
    </div>
  );
}

export default CapLocation;
