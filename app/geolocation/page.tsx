"use client";

// react imports
import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function errors(err: any) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

interface GeolocationPosition {
  coords: any;
  timestamp: number;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [geoData, setGeoData] = useState<GeolocationPosition>();
  const [geoStatus, setGeoStatus] = useState("");

  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true));

  const success = (pos: GeolocationPosition) => {
    setGeoData(pos);
  };

  const getDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            setGeoStatus(result.state);
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }, []);

  return (
    <>
      <main className="px-2 container max-w-5xl mx-auto">
        <h2>Testing GeoLocation</h2>
        <div className="border-2 border-blue-400 p-2">
          GeoLocation supported by browser/device:{" "}
          <b>{geoData ? "Yes" : "No"}</b>
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
            time stamp: <b>{geoData && getDate(geoData.timestamp)}</b>
          </div>
        </div>
        <p className="mt-4">Currently selected theme: {mounted && theme}</p>
        <button
          className="btn"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          Toggle theme
        </button>
      </main>
    </>
  );
}
